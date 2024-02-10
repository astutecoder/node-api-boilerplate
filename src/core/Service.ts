import { IRepository } from './IRepository';
import { IResponse } from './IResponse';

export abstract class Service<T> {
  constructor(protected repo: IRepository<T>) {}

  abstract list(query?: Record<string, unknown>): Promise<IResponse<T[]>>;
  abstract get(id: string): Promise<IResponse<T | null>>;
  abstract create(data: Partial<T>): Promise<IResponse<T | null>>;
  abstract update(id: string, data: Partial<T>): Promise<IResponse<T | null>>;
  abstract remove(id: string): Promise<IResponse<T | null>>;
}
