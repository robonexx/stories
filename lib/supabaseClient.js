/* import { createClient } from '@supabase/supabase-js'; */
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

/* const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''; */

/* export const supabase = createPagesBrowserClient(supabaseUrl, supabaseKey); */
export const supabase = createPagesBrowserClient();
