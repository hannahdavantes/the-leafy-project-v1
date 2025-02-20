import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fjypotkepcjgvuqhvrwb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeXBvdGtlcGNqZ3Z1cWh2cndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDA1ODEsImV4cCI6MjA1NTUxNjU4MX0.6XigSn9DtnJyRbx0ti0raawajoUu3YiE4j9a3rsMcl0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

//PROJECT URL
// https://fjypotkepcjgvuqhvrwb.supabase.co

//API KEY
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeXBvdGtlcGNqZ3Z1cWh2cndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDA1ODEsImV4cCI6MjA1NTUxNjU4MX0.6XigSn9DtnJyRbx0ti0raawajoUu3YiE4j9a3rsMcl0
