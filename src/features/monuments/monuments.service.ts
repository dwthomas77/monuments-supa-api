import type { Monument, MonumentsRepository } from './monuments.repository.js';

export async function getMonuments(repo: MonumentsRepository): Promise<{ monuments: Monument[] }> {
  console.log('THIS IS THE REPO')
  console.log(repo)
  console.log(repo.findAll)
  const monuments = await repo.findAll();
  return { monuments };
}

export async function createMonument(
  repo: MonumentsRepository,
  monument: Omit<Monument, 'id'>
): Promise<{ monument: Monument }> {
  const created = await repo.create(monument);
  return { monument: created };
}
