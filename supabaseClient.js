import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://amydhpkkizfacwpjkqsd.supabase.co'   
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFteWRocGtraXpmYWN3cGprcXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MDc1NjMsImV4cCI6MjA3NDE4MzU2M30.fMVXlMKQ56KP_OevNJF10Ggguyz3xBzYqBALUfHBX6c'                  // paste anon key here

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
