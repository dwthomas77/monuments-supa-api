import type { FastifyInstance } from 'fastify';
import type { MonumentsRepository } from './monuments.repository.js';
import { createListMonuments } from './monuments.controller.js';

export async function registerMonumentsRoutes(
  app: FastifyInstance,
  repo: MonumentsRepository
): Promise<void> {
  app.get('/monuments', createListMonuments(repo));
}
