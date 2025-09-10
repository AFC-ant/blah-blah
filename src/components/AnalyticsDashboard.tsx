import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/use-analytics";

interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: number;
}

interface AnalyticsStats {
  totalPageViews: number;
  uniqueSessions: number;
  avgSessionDuration: number;
  timeOnSiteMilestones: {
    oneMinute: number;
    twoMinutes: number;
    fiveMinutes: number;
    tenMinutes: number;
  };
  scrollDepthStats: {
    depth25: number;
    depth50: number;
    depth75: number;
    depth100: number;
  };
  topPages: { page: string; views: number }[];
}

export const AnalyticsDashboard = () => {
  const { getAnalyticsData, clearAnalyticsData } = useAnalytics();
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  const calculateStats = (events: AnalyticsEvent[]): AnalyticsStats => {
    const pageViews = events.filter(e => e.event === 'page_view');
    const sessionsMap = new Map<string, number>();
    const timeOnSiteMilestones = {
      oneMinute: events.filter(e => e.event === 'time_on_site_1_minute').length,
      twoMinutes: events.filter(e => e.event === 'time_on_site_2_minutes').length,
      fiveMinutes: events.filter(e => e.event === 'time_on_site_5_minutes').length,
      tenMinutes: events.filter(e => e.event === 'time_on_site_10_minutes').length,
    };
    
    const scrollDepthStats = {
      depth25: events.filter(e => e.event === 'scroll_depth' && e.properties.percentage === 25).length,
      depth50: events.filter(e => e.event === 'scroll_depth' && e.properties.percentage === 50).length,
      depth75: events.filter(e => e.event === 'scroll_depth' && e.properties.percentage === 75).length,
      depth100: events.filter(e => e.event === 'scroll_depth' && e.properties.percentage === 100).length,
    };

    // Calculate unique sessions and average duration
    const sessionEnds = events.filter(e => e.event === 'session_end');
    sessionEnds.forEach(event => {
      const duration = event.properties.totalDuration || 0;
      sessionsMap.set(event.properties.sessionId || 'unknown', duration);
    });

    const avgSessionDuration = sessionsMap.size > 0 
      ? Array.from(sessionsMap.values()).reduce((a, b) => a + b, 0) / sessionsMap.size 
      : 0;

    // Calculate top pages
    const pageCount = new Map<string, number>();
    pageViews.forEach(event => {
      const page = event.properties.page || 'unknown';
      pageCount.set(page, (pageCount.get(page) || 0) + 1);
    });
    
    const topPages = Array.from(pageCount.entries())
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);

    return {
      totalPageViews: pageViews.length,
      uniqueSessions: sessionsMap.size,
      avgSessionDuration,
      timeOnSiteMilestones,
      scrollDepthStats,
      topPages,
    };
  };

  const refreshData = () => {
    const analyticsEvents = getAnalyticsData();
    setEvents(analyticsEvents);
    setStats(calculateStats(analyticsEvents));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const formatDuration = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
  };

  const handleClearData = () => {
    clearAnalyticsData();
    refreshData();
  };

  if (!stats) {
    return <div>Loading analytics...</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Analytics Dashboard</h2>
        <div className="space-x-2">
          <Button onClick={refreshData} variant="outline">
            Refresh
          </Button>
          <Button onClick={handleClearData} variant="destructive">
            Clear Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className="text-2xl font-bold">{formatDuration(stats.avgSessionDuration)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">1+ Min Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.timeOnSiteMilestones.oneMinute}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <span className="font-semibold">{stats.scrollDepthStats.depth25} users</span>
              </div>
              <div className="flex justify-between">
                <span>50% Scroll:</span>
                <span className="font-semibold">{stats.scrollDepthStats.depth50} users</span>
              </div>
              <div className="flex justify-between">
                <span>75% Scroll:</span>
                <span className="font-semibold">{stats.scrollDepthStats.depth75} users</span>
              </div>
              <div className="flex justify-between">
                <span>100% Scroll:</span>
                <span className="font-semibold">{stats.scrollDepthStats.depth100} users</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {stats.topPages.map((page, index) => (
              <div key={page.page} className="flex justify-between items-center">
                <span className="capitalize">{page.page.replace(/_/g, ' ')}</span>
                <span className="font-semibold">{page.views} views</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Events ({events.length} total)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-h-64 overflow-y-auto space-y-2">
            {events.slice(-10).reverse().map((event, index) => (
              <div key={index} className="text-sm border-b pb-1">
                <div className="font-semibold">{event.event}</div>
                <div className="text-muted-foreground">
                  {new Date(event.timestamp).toLocaleString()}
                </div>
                {Object.keys(event.properties).length > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {JSON.stringify(event.properties, null, 1).replace(/[{}]/g, '').replace(/"/g, '').slice(0, 100)}...
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};