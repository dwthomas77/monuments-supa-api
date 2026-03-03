import fastifyPlugin from 'fastify-plugin';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
export type DatabaseClient = SupabaseClient;
import type { FastifyInstance } from 'fastify';

interface DatabaseOptions {
    supabaseUrl: string;
    supabaseKey: string;
}

function databasePlugin(fastify: FastifyInstance, options: DatabaseOptions, done: () => void): void {
    const { supabaseUrl, supabaseKey } = options;
    let supabase: SupabaseClient;
    try {
        supabase = createClient(supabaseUrl, supabaseKey);
    } catch (err) {
        throw new Error('Failed to create Supabase client', { cause: err });
    }
    if (!fastify.supabase) {
        fastify.decorate('supabase', supabase)
    }
    done();
};


export default fastifyPlugin(databasePlugin, { name: 'fastify-supabase'})