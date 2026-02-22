import type { FastifyRequest, FastifyReply } from 'fastify';
import type { MonumentsRepository } from './monuments.repository.js';
import { getMonuments } from './monuments.service.js';

export function createListMonuments(repo: MonumentsRepository) {
  return async function listMonuments(
    _request: FastifyRequest,
    _reply: FastifyReply
  ) {
    return await getMonuments(repo);
  };
}
