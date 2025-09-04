import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lfmrgwgcdcryokkcynau.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbXJnd2djZGNyeW9ra2N5bmF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDk5NjMsImV4cCI6MjA2OTQ4NTk2M30.1YrGSnZxtOsfZMPrOkOAf8cQbtIfKxm5eJX8XfxlnZ4'

export const supabase = createClient(supabaseUrl, supabaseKey) 