import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: number;
}

export const useAnalytics = () => {
  const [sessionStart] = useState(Date.now());
  const timeTrackingRef = useRef<{
    oneMinute: boolean;
    twoMinutes: boolean;
    fiveMinutes: boolean;
    tenMinutes: boolean;
  }>({
    oneMinute: false,
    twoMinutes: false,
    fiveMinutes: false,
    tenMinutes: false,
  });

  const logEvent = async (event: string, properties: Record<string, any> = {}) => {
    // Skip tracking if this is a preview environment
    if (window.location.href.includes('__lovable_token') || 
        window.location.href.includes('id-preview') ||
        window.location.hostname.includes('lovableproject.com')) {
      return;
    }

    // Get IP address from external service
    let ipAddress = null;
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      ipAddress = data.ip;
    } catch (error) {
      console.info('Could not fetch IP address:', error);
    }

    const eventData = {
      event_name: event,
      properties: {
        ...properties,
        sessionDuration: Date.now() - sessionStart,
        timestamp: Date.now(),
      },
      session_id: sessionStart.toString(),
      url: window.location.href,
      user_agent: navigator.userAgent,
      ip_address: ipAddress
    };

    // Log to console for development
    console.info('Analytics Event:', event, eventData.properties);

    // Store in Supabase for website-wide analytics
    try {
      await supabase
        .from('analytics_events')
        .insert([eventData]);
    } catch (error) {
      console.error('Failed to log analytics event:', error);
    }

    // Track Facebook Pixel if available
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CustomEvent', {
        event_name: event,
        ...properties,
      });
    }

  };

  // Track time milestones
  useEffect(() => {
    const intervals = [
      { time: 60000, key: 'oneMinute', event: 'time_on_site_1min' },      // 1 minute
      { time: 120000, key: 'twoMinutes', event: 'time_on_site_2min' },   // 2 minutes
      { time: 300000, key: 'fiveMinutes', event: 'time_on_site_5min' },  // 5 minutes
      { time: 600000, key: 'tenMinutes', event: 'time_on_site_10min' },  // 10 minutes
    ];

    const timeouts = intervals.map(({ time, key, event }) => {
      return setTimeout(() => {
        if (!timeTrackingRef.current[key as keyof typeof timeTrackingRef.current]) {
          timeTrackingRef.current[key as keyof typeof timeTrackingRef.current] = true;
          logEvent(event, {
            milestone: key,
            actualTimeSpent: Date.now() - sessionStart,
          });
        }
      }, time);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [sessionStart]);

  // Track page visibility changes
  useEffect(() => {
    let hiddenTime = 0;
    let lastVisible = Date.now();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        lastVisible = Date.now();
        logEvent('page_hidden', {
          activeTime: Date.now() - sessionStart - hiddenTime,
        });
      } else {
        const timeHidden = Date.now() - lastVisible;
        hiddenTime += timeHidden;
        logEvent('page_visible', {
          timeHidden,
          totalHiddenTime: hiddenTime,
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [sessionStart]);

  // Track scroll depth
  useEffect(() => {
    let maxScrollPercentage = 0;
    const scrollMilestones = [25, 50, 75, 90, 100];
    const trackedMilestones = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      if (scrollPercentage > maxScrollPercentage) {
        maxScrollPercentage = scrollPercentage;
        
        // Track scroll milestones
        scrollMilestones.forEach(milestone => {
          if (scrollPercentage >= milestone && !trackedMilestones.has(milestone)) {
            trackedMilestones.add(milestone);
            logEvent(`scroll_depth_${milestone}`, {
              percentage: milestone,
              actualPercentage: scrollPercentage,
            });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track session end on unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      logEvent('session_end', {
        totalDuration: Date.now() - sessionStart,
        finalUrl: window.location.href,
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [sessionStart]);

  const getAnalyticsData = async () => {
    try {
      const { data, error } = await supabase
        .from('analytics_events')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Failed to fetch analytics data:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
      return [];
    }
  };

  const clearAnalyticsData = async () => {
    try {
      await supabase
        .from('analytics_events')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all records
    } catch (error) {
      console.error('Failed to clear analytics data:', error);
    }
  };

  return {
    logEvent,
    getSessionDuration: () => Date.now() - sessionStart,
    getAnalyticsData,
    clearAnalyticsData,
  };
};