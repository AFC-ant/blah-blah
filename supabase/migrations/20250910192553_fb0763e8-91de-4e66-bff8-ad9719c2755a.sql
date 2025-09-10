-- Add IP address column to analytics_events table
ALTER TABLE public.analytics_events 
ADD COLUMN ip_address inet;