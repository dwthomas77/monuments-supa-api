import type { DatabaseClient } from '../../db/client.js';

/** Monument shape for the API (data layer). */
export interface Monument {
  id: string;
  name: string;
  location?: string;
}

export interface MonumentsRepository {
  findAll(): Promise<Monument[]>;
  create(monument: Omit<Monument, 'id'>): Promise<Monument>;
}

export function createMonumentsRepository(db: DatabaseClient): MonumentsRepository {
  return {
    async findAll(): Promise<Monument[]> {
      const { data, error } = await db
        .from('Monuments')
        .select('*');
      console.log("did it work?");
      if (error) {
        throw new Error('Failed to fetch characters', { cause: error });
      }
      console.log(data);
      return data;
    },
    async create(monument: Omit<Monument, 'id'>): Promise<Monument> {
      console.log('received the monument object in the repository')
      console.log(monument)
      try {
        const { data, error } = await db
          .from('Monuments')
          .insert(monument);

        if (error) {
          console.log('instert threw an error');
          console.log(error)
        }
      } catch (error) {
        console.log('write operation failed due to error')
        console.log(error)
      }
      return monument as Monument;
    },
  };
}
