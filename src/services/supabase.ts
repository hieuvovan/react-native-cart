import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://huzzltyvthalizbkaiyv.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1enpsdHl2dGhhbGl6YmthaXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwMzg0MDYsImV4cCI6MTk5MjYxNDQwNn0.Jg9Zr8tnM0U7aLrJq_x3I5kqTn08mqUW49cfh23u9Go';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
