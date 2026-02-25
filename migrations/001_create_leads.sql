-- Create leads table for chatbot contact form
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text default '',
  created_at timestamptz default now()
);

-- No RLS needed — accessed via service role key from serverless function
alter table leads enable row level security;
