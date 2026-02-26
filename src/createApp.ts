import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import type { FastifyInstance } from 'fastify';
import { createDbClient } from './db/client.js';
import { registerMonumentsRoutes } from './features/monuments/index.js';
import { createMonumentsRepository } from './features/monuments/monuments.repository.js';

export async function createFastifyApp(): Promise<FastifyInstance> {
  const app: FastifyInstance = Fastify({ logger: true });
  await app.register(cors, {
    // put your options here
  })
  const db = createDbClient();
  const monumentsRepo = createMonumentsRepository(db);
  await registerMonumentsRoutes(app, monumentsRepo);
  return app;
}
