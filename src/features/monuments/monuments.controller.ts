import type { FastifyRequest, FastifyReply } from 'fastify';
import type { Monument, MonumentsRepository } from './monuments.repository.js';
import { getMonuments as getMonumentsService, createMonument as createMonumentService } from './monuments.service.js';

export function createMonumentsController(repo: MonumentsRepository) {
  async function listMonuments(
    _request: FastifyRequest,
    _reply: FastifyReply
  ) {
    return await getMonumentsService(repo);
  }

  async function createMonument(
    request: FastifyRequest<{ Body: Omit<Monument, 'id'> }>,
    _reply: FastifyReply
  ) {
    console.log('create monument service called with ', request.body)
    return await createMonumentService(repo, request.body);
  }

  return { listMonuments, createMonument };
}

