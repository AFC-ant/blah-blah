import { useEffect, useRef, useState } from 'react';

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

  const logEvent = (event: string, properties: Record<string, any> = {}) => {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties: {
        ...properties,
        sessionDuration: Date.now() - sessionStart,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      },
      timestamp: Date.now(),
    };

    // Log to console for development
    console.info('Analytics Event:', event, analyticsEvent.properties);

    // Store in localStorage for persistence
    const existingEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    existingEvents.push(analyticsEvent);
    // Keep only last 100 events to prevent localStorage bloat
    if (existingEvents.length > 100) {
      existingEvents.shift();
    }
    localStorage.setItem('analytics_events', JSON.stringify(existingEvents));

    // Track Facebook Pixel if available
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CustomEvent', {
        event_name: event,
        ...properties,
      });
    }

    // Track Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: event,
        ...properties,
      });
    }
  };

  // Track time milestones
  useEffect(() => {
    const intervals = [
      { time: 60000, key: 'oneMinute', event: 'time_on_site_1_minute' },      // 1 minute
      { time: 120000, key: 'twoMinutes', event: 'time_on_site_2_minutes' },   // 2 minutes
      { time: 300000, key: 'fiveMinutes', event: 'time_on_site_5_minutes' },  // 5 minutes
      { time: 600000, key: 'tenMinutes', event: 'time_on_site_10_minutes' },  // 10 minutes
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
            logEvent('scroll_depth', {
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

  return {
    logEvent,
    getSessionDuration: () => Date.now() - sessionStart,
    getAnalyticsData: () => JSON.parse(localStorage.getItem('analytics_events') || '[]'),
    clearAnalyticsData: () => localStorage.removeItem('analytics_events'),
  };
};
