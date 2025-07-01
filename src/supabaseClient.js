
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://oyfkqugwvaxnpzuiloii.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95ZmtxdWd3dmF4bnB6dWlsb2lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzg5OTgsImV4cCI6MjA2NjkxNDk5OH0.RtiivMyEHBHdVkJicc6Urx9ZVPJSilbpeKVj67xu52s'
export const supabase = createClient(supabaseUrl, supabaseKey)