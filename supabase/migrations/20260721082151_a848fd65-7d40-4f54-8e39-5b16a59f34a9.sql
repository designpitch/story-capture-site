
CREATE TABLE public.booking_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  location TEXT,
  ready_date TEXT,
  email TEXT NOT NULL,
  package TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.booking_enquiries TO anon, authenticated;
GRANT ALL ON public.booking_enquiries TO service_role;

ALTER TABLE public.booking_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.booking_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
