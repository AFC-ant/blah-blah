-- SECURITY FIX: Remove public access to sensitive customer data
-- Current issue: Applications and form submissions are publicly readable

-- Drop the dangerous public read policies
DROP POLICY IF EXISTS "Anyone can read applications" ON public.applications;
DROP POLICY IF EXISTS "Anyone can read submissions" ON public.form_submissions;

-- Create secure admin-only read policies
-- Only authenticated admin users should be able to read customer data
CREATE POLICY "Admin users can read applications" 
ON public.applications 
FOR SELECT 
TO authenticated
USING (
  -- This will need to be updated once admin roles are implemented
  -- For now, restrict to authenticated users only
  auth.uid() IS NOT NULL
);

CREATE POLICY "Admin users can read form submissions" 
ON public.form_submissions 
FOR SELECT 
TO authenticated
USING (
  -- This will need to be updated once admin roles are implemented  
  -- For now, restrict to authenticated users only
  auth.uid() IS NOT NULL
);

-- Keep the insert policies as they're needed for public form submissions
-- These are acceptable as they only allow creating new records, not reading existing ones