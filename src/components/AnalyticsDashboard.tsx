import React, { useState, useEffect } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AnalyticsEvent {
  id: string;
  event_name: string;
  properties: any;
  session_id: string;
  url: string;
  user_agent?: string;
  created_at: string;
}

interface AnalyticsStats {
  totalPageViews: number;
  uniqueSessions: number;
  averageSessionDuration: number;
  oneMinutePlusVisitors: number;
  timeOnSiteMilestones: {
    oneMinute: number;
    twoMinutes: number;
    fiveMinutes: number;
    tenMinutes: number;
  };
  scrollDepthAnalysis: {
    quarter: number;
    half: number;
    threeQuarters: number;
    ninety: number;
    full: number;
  };
  topPages: { page: string; views: number }[];
}

export const AnalyticsDashboard = () => {
  const { clearAnalyticsData } = useAnalytics();
  const { toast } = useToast();
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data, error } = await supabase.rpc('is_admin');
      if (error) {
        console.error('Error checking admin access:', error);
        setIsAdmin(false);
      } else {
        setIsAdmin(data || false);
        if (data) {
          refreshData();
        }
      }
    } catch (error) {
      console.error('Error checking admin access:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    try {
      const { data: fetchedEvents, error } = await supabase
        .from('analytics_events')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching analytics:', error);
        toast({
          title: "Error",
          description: "Failed to load analytics data",
          variant: "destructive",
        });
        return;
      }
      
      setEvents(fetchedEvents || []);
      const calculatedStats = calculateStats(fetchedEvents || []);
      setStats(calculatedStats);
    } catch (error) {
      console.error('Error fetching analytics:', error);
      toast({
        title: "Error", 
        description: "Failed to load analytics data",
        variant: "destructive",
      });
    }
  };

  const calculateStats = (events: AnalyticsEvent[]): AnalyticsStats => {
    if (events.length === 0) {
      return {
        totalPageViews: 0,
        uniqueSessions: 0,
        averageSessionDuration: 0,
        oneMinutePlusVisitors: 0,
        timeOnSiteMilestones: {
          oneMinute: 0,
          twoMinutes: 0,
          fiveMinutes: 0,
          tenMinutes: 0
        },
        scrollDepthAnalysis: {
          quarter: 0,
          half: 0,
          threeQuarters: 0,
          ninety: 0,
          full: 0
        },
        topPages: []
      };
    }

    const pageViews = events.filter(e => e.event_name === 'page_view');
    const sessions = new Set(events.map(e => e.session_id));
    
    // Time milestones
    const timeEvents = events.filter(e => e.event_name.includes('time_on_site'));
    const oneMinEvents = timeEvents.filter(e => e.event_name === 'time_on_site_1min');
    const twoMinEvents = timeEvents.filter(e => e.event_name === 'time_on_site_2min');
    const fiveMinEvents = timeEvents.filter(e => e.event_name === 'time_on_site_5min');
    const tenMinEvents = timeEvents.filter(e => e.event_name === 'time_on_site_10min');

    // Scroll depth
    const scrollEvents = events.filter(e => e.event_name.includes('scroll_depth'));
    const scroll25 = scrollEvents.filter(e => e.event_name === 'scroll_depth_25');
    const scroll50 = scrollEvents.filter(e => e.event_name === 'scroll_depth_50');
    const scroll75 = scrollEvents.filter(e => e.event_name === 'scroll_depth_75');
    const scroll90 = scrollEvents.filter(e => e.event_name === 'scroll_depth_90');
    const scroll100 = scrollEvents.filter(e => e.event_name === 'scroll_depth_100');

    // Top pages
    const pageViewCounts: Record<string, number> = {};
    pageViews.forEach(event => {
      const page = event.properties.page || event.url || 'Unknown';
      pageViewCounts[page] = (pageViewCounts[page] || 0) + 1;
    });
    
    const topPages = Object.entries(pageViewCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([page, views]) => ({ page, views }));

    // Calculate average session duration
    const sessionDurations = events
      .filter(e => e.properties.sessionDuration)
      .map(e => e.properties.sessionDuration);
    const avgDuration = sessionDurations.length > 0 
      ? sessionDurations.reduce((a, b) => a + b, 0) / sessionDurations.length 
      : 0;

    return {
      totalPageViews: pageViews.length,
      uniqueSessions: sessions.size,
      averageSessionDuration: avgDuration,
      oneMinutePlusVisitors: oneMinEvents.length,
      timeOnSiteMilestones: {
        oneMinute: oneMinEvents.length,
        twoMinutes: twoMinEvents.length,
        fiveMinutes: fiveMinEvents.length,
        tenMinutes: tenMinEvents.length
      },
      scrollDepthAnalysis: {
        quarter: scroll25.length,
        half: scroll50.length,
        threeQuarters: scroll75.length,
        ninety: scroll90.length,
        full: scroll100.length
      },
      topPages
    };
  };

  const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Access Denied</h1>
          <p className="text-muted-foreground">You need admin privileges to access analytics.</p>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Website Analytics</h1>
          <div className="flex gap-4">
            <Button onClick={refreshData}>
              Refresh
            </Button>
            <Button 
              variant="destructive" 
              onClick={async () => {
                await clearAnalyticsData();
                await refreshData();
                toast({
                  title: "Data Cleared",
                  description: "Analytics data has been cleared successfully",
                });
              }}
            >
              Clear Data
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPageViews}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Unique Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.uniqueSessions}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg Session Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatDuration(stats.averageSessionDuration)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">1+ Min Visitors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.oneMinutePlusVisitors}</div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Time on Site Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>1+ Minutes:</span>
                  <span className="font-semibold">{stats.timeOnSiteMilestones.oneMinute} visitors</span>
                </div>
                <div className="flex justify-between">
                  <span>2+ Minutes:</span>
                  <span className="font-semibold">{stats.timeOnSiteMilestones.twoMinutes} visitors</span>
                </div>
                <div className="flex justify-between">
                  <span>5+ Minutes:</span>
                  <span className="font-semibold">{stats.timeOnSiteMilestones.fiveMinutes} visitors</span>
                </div>
                <div className="flex justify-between">
                  <span>10+ Minutes:</span>
                  <span className="font-semibold">{stats.timeOnSiteMilestones.tenMinutes} visitors</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scroll Depth Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>25% Scroll:</span>
                  <span className="font-semibold">{stats.scrollDepthAnalysis.quarter} users</span>
                </div>
                <div className="flex justify-between">
                  <span>50% Scroll:</span>
                  <span className="font-semibold">{stats.scrollDepthAnalysis.half} users</span>
                </div>
                <div className="flex justify-between">
                  <span>75% Scroll:</span>
                  <span className="font-semibold">{stats.scrollDepthAnalysis.threeQuarters} users</span>
                </div>
                <div className="flex justify-between">
                  <span>90% Scroll:</span>
                  <span className="font-semibold">{stats.scrollDepthAnalysis.ninety} users</span>
                </div>
                <div className="flex justify-between">
                  <span>100% Scroll:</span>
                  <span className="font-semibold">{stats.scrollDepthAnalysis.full} users</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Pages */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {stats.topPages.map((page, index) => (
                <div key={page.page} className="flex justify-between items-center">
                  <span className="truncate max-w-lg">{page.page}</span>
                  <span className="font-semibold">{page.views} views</span>
                </div>
              ))}
              {stats.topPages.length === 0 && (
                <p className="text-muted-foreground">No page data available</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Events */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Events ({events.length} total)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-h-64 overflow-y-auto space-y-2">
              {events.slice(0, 20).map((event, index) => (
                <div key={event.id} className="text-sm border-b pb-1">
                  <div className="font-semibold">{event.event_name}</div>
                  <div className="text-muted-foreground">
                    {new Date(event.created_at).toLocaleString()}
                  </div>
                  {Object.keys(event.properties).length > 0 && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {JSON.stringify(event.properties, null, 1).replace(/[{}]/g, '').replace(/"/g, '').slice(0, 100)}...
                    </div>
                  )}
                </div>
              ))}
              {events.length === 0 && (
                <p className="text-muted-foreground">No events recorded yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};