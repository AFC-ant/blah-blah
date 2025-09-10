-- Delete analytics events from preview environments
DELETE FROM public.analytics_events 
WHERE url LIKE '%id-preview%' 
   OR url LIKE '%lovableproject.com%';