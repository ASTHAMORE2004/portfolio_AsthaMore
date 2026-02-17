
-- Create guestbook table for visitor messages
CREATE TABLE public.guestbook (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  emoji TEXT DEFAULT '👋',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.guestbook ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read guestbook entries
CREATE POLICY "Guestbook entries are publicly readable"
  ON public.guestbook FOR SELECT
  USING (true);

-- Allow anyone to insert (public guestbook)
CREATE POLICY "Anyone can sign the guestbook"
  ON public.guestbook FOR INSERT
  WITH CHECK (
    char_length(name) > 0 AND char_length(name) <= 100
    AND char_length(message) > 0 AND char_length(message) <= 500
  );

-- Enable realtime for guestbook
ALTER PUBLICATION supabase_realtime ADD TABLE public.guestbook;
