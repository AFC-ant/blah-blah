import { useEffect, useCallback } from 'react';

// Declare global interfaces for tracking
declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
    gtag: any;
  }
}

// Configuration constants
const META_PIXEL_ID = 'REPLACE_WITH_PIXEL_ID';
const GTM_CONTAINER_ID = 'GTM-XXXXXXX';

export const useTracking = () => {
  // Initialize tracking on mount
  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Track initial page view
    trackEvent('PageView', {
      page_url: window.location.href,
      page_title: document.title
    });
  }, []);

  // Generic event tracking function
  const trackEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    const eventData = {
      event: eventName,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      ...parameters
    };

    // Push to dataLayer (for GTM/GA4)
    if (window.dataLayer) {
      window.dataLayer.push(eventData);
    }

    // Meta Pixel tracking (only if valid pixel ID is set)
    if (window.fbq && META_PIXEL_ID !== 'REPLACE_WITH_PIXEL_ID') {
      if (eventName === 'PageView') {
        window.fbq('track', 'PageView');
      } else if (eventName === 'LeadSubmit') {
        window.fbq('track', 'Lead');
      } else if (eventName === 'LeadSuccess') {
        window.fbq('track', 'CompleteRegistration');
      } else {
        window.fbq('trackCustom', eventName, parameters);
      }
    }

    // Console log for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  }, []);

  // Lead form specific events
  const trackLeadFormView = useCallback(() => {
    trackEvent('LeadFormView');
  }, [trackEvent]);

  const trackLeadSubmit = useCallback((formData: Record<string, any>) => {
    trackEvent('LeadSubmit', {
      form_variant: formData.variant || 'unknown',
      has_phone: !!formData.phone,
      has_timing: !!formData.timing,
      has_amount: !!formData.amount
    });
  }, [trackEvent]);

  const trackLeadSuccess = useCallback((formData: Record<string, any>) => {
    trackEvent('LeadSuccess', {
      form_variant: formData.variant || 'unknown',
      conversion_type: 'lead_generation'
    });
  }, [trackEvent]);

  // Video tracking events
  const trackVideoPlay = useCallback((videoId: string, videoName: string) => {
    trackEvent('VideoPlay', {
      video_id: videoId,
      video_name: videoName
    });
  }, [trackEvent]);

  const trackVideoView = useCallback((videoId: string, videoName: string, quartile: number) => {
    trackEvent('VideoView', {
      video_id: videoId,
      video_name: videoName,
      quartile: quartile
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackLeadFormView,
    trackLeadSubmit,
    trackLeadSuccess,
    trackVideoPlay,
    trackVideoView
  };
};

// Video tracking utility for adding event listeners
export const setupVideoTracking = (videoId: string, videoName: string, trackVideoPlay: Function, trackVideoView: Function) => {
  const video = document.getElementById(videoId) as HTMLVideoElement;
  if (!video) return;

  let quartilesFired = new Set<number>();

  // Track play event
  const handlePlay = () => {
    trackVideoPlay(videoId, videoName);
  };

  // Track quartile events
  const handleTimeUpdate = () => {
    if (!video.duration) return;
    
    const progress = (video.currentTime / video.duration) * 100;
    
    [25, 50, 75, 95].forEach(quartile => {
      if (progress >= quartile && !quartilesFired.has(quartile)) {
        quartilesFired.add(quartile);
        trackVideoView(videoId, videoName, quartile);
      }
    });
  };

  video.addEventListener('play', handlePlay);
  video.addEventListener('timeupdate', handleTimeUpdate);

  // Cleanup function
  return () => {
    video.removeEventListener('play', handlePlay);
    video.removeEventListener('timeupdate', handleTimeUpdate);
  };
};