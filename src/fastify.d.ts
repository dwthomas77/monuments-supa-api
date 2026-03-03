import type { DatabaseClient } from './db/client.js';

declare module 'fastify' {
  interface FastifyInstance {
    supabase?: DatabaseClient;
  }
}

