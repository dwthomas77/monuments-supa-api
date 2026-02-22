import { createClient, type SupabaseClient } from '@supabase/supabase-js';
export type DatabaseClient = SupabaseClient;

export function createDbClient() {
    let supabase: SupabaseClient;
    const supabaseUrl = process.env.SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_KEY!;
    try {
        supabase = createClient(supabaseUrl, supabaseKey);
        return supabase;
    } catch (err) {
        throw new Error('Failed to create Supabase client', { cause: err });
    }
}