import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_PROJECT_URL;
const annonKey = import.meta.env.VITE_ANON_KEY;

export const supabase = createClient(url, annonKey);
