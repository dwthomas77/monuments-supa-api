import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import type { FastifyInstance } from 'fastify';
import {  monumentRoutes } from './features/monuments/index.js';
import databasePlugin from './database-plugin.js';

export async function createFastifyApp(): Promise<FastifyInstance> {
  const app: FastifyInstance = Fastify({ logger: true });
  await app.register(cors, {
    // put your options here
  })
  app.register(databasePlugin,  {
    supabaseUrl: process.env.SUPABASE_URL!,
    supabaseKey: process.env.SUPABASE_KEY!,
  });
  app.register(monumentRoutes)
  return app;
}
