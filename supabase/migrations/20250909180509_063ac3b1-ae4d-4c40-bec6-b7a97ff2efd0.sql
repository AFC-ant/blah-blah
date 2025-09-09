-- Step 1: Create proper role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Step 2: Create user_roles table for proper role management
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Step 3: Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Step 4: Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Step 5: Create function to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(auth.uid(), 'admin'::app_role)
$$;

-- Step 6: Drop the vulnerable policy on applications table
DROP POLICY IF EXISTS "Admin users can read applications" ON public.applications;

-- Step 7: Create secure policy that only allows real admins to read applications
CREATE POLICY "Only admin users can read applications" 
ON public.applications 
FOR SELECT 
TO authenticated
USING (public.is_admin());

-- Step 8: Fix the same vulnerability in form_submissions table
DROP POLICY IF EXISTS "Admin users can read form submissions" ON public.form_submissions;

CREATE POLICY "Only admin users can read form submissions" 
ON public.form_submissions 
FOR SELECT 
TO authenticated
USING (public.is_admin());

-- Step 9: Create policies for user_roles table
CREATE POLICY "Admins can view all user roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can manage user roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Step 10: Insert first admin user (replace with actual admin user ID)
-- Note: This will need to be updated with a real user ID after someone signs up
-- For now, this creates the structure. The first admin will need to be added manually.
COMMENT ON TABLE public.user_roles IS 'To create the first admin: INSERT INTO public.user_roles (user_id, role) VALUES (''<actual-user-uuid>'', ''admin'');';