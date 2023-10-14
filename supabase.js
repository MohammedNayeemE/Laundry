import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://nottmzrzturplyldrmpt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vdHRtenJ6dHVycGx5bGRybXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjQ0NTYsImV4cCI6MjAxMjAwMDQ1Nn0.-O2Cj8H7hs7VQPHryHMfypA_fkB0uQ5cCQiHW9tFFG8');
export {supabase};