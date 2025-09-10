-- Delete analytics events from Lovable preview visits
DELETE FROM public.analytics_events 
WHERE url LIKE '%__lovable_token%';