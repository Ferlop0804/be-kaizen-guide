-- Create a table for sales inquiries (enterprise contact requests)
CREATE TABLE public.sales_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sales_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (public form)
CREATE POLICY "Anyone can submit a sales inquiry"
ON public.sales_inquiries
FOR INSERT
WITH CHECK (true);

-- Only authenticated service role can read (for admin/backend use)
CREATE POLICY "Service role can read sales inquiries"
ON public.sales_inquiries
FOR SELECT
USING (false);  -- No public reads, only via service role