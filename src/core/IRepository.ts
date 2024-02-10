import { IResponse } from './IResponse';

export interface IRepository<T> {
  find(query: Record<string, unknown>): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(data: T): Promise<T | null>;
  update(id: string, data: Partial<T>): Promise<T | null>;
  remove(id: string): Promise<T | null>;
}
