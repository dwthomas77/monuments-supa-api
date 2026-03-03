import type { FastifyInstance } from 'fastify';
import { createMonumentsController } from './monuments.controller.js';
import { createMonumentsRepository } from './monuments.repository.js';

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

export function monumentRoutes(app: FastifyInstance, _options: unknown, done: () => void): void { 
  const db = app.supabase;

  if (!db) {
    throw new Error('Supabase client is not available on Fastify instance.');
  }

  const repo = createMonumentsRepository(db);
  const { listMonuments, createMonument } = createMonumentsController(repo);
  app.get('/monuments', listMonuments);
  app.post('/monuments', monumentOpts, createMonument);
  done();
};
