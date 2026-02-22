import type { Monument, MonumentsRepository } from './monuments.repository.js';

export async function getMonuments(repo: MonumentsRepository): Promise<{ monuments: Monument[] }> {
  const monuments = await repo.findAll();
  return { monuments };
}
