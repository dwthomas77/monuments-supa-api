import type { FastifyInstance } from 'fastify';
import type { MonumentsRepository } from './monuments.repository.js';
import { createMonumentsController } from './monuments.controller.js';

export interface Monument {
  id: number;
  city: string;
  description: string | null;
  imageUrl?: string | null;
  state: string;
  longitude: number;
  latitude: number;
  map_type?: string;
  map_zoom?: number;
}

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const monumentOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        city: { type: 'string' },
        description: { type: ['string', 'null'] },
        img_url: { type: ['string', 'null'] },
        state: { type: 'string' },
        longitude: { type: 'number' },
        latitude: { type: 'number' },
        map_type: { type: 'string' },
        map_zoom: { type: 'number' },
      },
      required: [
        'city',
        'description',
        'img_url',
        'state',
        'longitude',
        'latitude',
        'map_type',
        'map_zoom',
      ],
    },
  },
};

export async function registerMonumentsRoutes(
  app: FastifyInstance,
  repo: MonumentsRepository
): Promise<void> {
  const { listMonuments, createMonument } = createMonumentsController(repo);
  app.get('/monuments', listMonuments);
  app.post('/monuments', monumentOpts, createMonument);
}
