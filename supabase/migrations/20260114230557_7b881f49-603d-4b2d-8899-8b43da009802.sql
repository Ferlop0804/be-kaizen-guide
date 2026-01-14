-- Create demo_requests table for storing form submissions
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  challenge TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS (public insert, no user auth required for landing page)
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (no auth required for lead capture)
CREATE POLICY "Allow public inserts" 
ON public.demo_requests 
FOR INSERT 
WITH CHECK (true);

-- Only service role can read (for admin/backend use)
CREATE POLICY "Service role can read all" 
ON public.demo_requests 
FOR SELECT 
USING (false);