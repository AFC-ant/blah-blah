-- Create table for storing form submissions
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  timing TEXT,
  amount TEXT,
  variant TEXT NOT NULL, -- "recent" or "older"
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (allowing public read for admin purposes)
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for form submissions)
CREATE POLICY "Anyone can submit forms" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading (for admin/owner access)
CREATE POLICY "Anyone can read submissions" 
ON public.form_submissions 
FOR SELECT 
USING (true);

-- Create index for better performance on date queries
CREATE INDEX idx_form_submissions_submitted_at ON public.form_submissions(submitted_at DESC);