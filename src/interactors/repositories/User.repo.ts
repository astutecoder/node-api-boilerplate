import { IRepository } from '~/core/IRepository';
import { IResponse } from '~/core/IResponse';
import { IUser } from '~/core/models/IUser';
import UserModel from './models/User.model';

export class UserRepository implements IRepository<IUser> {
  async find(query: Record<string, unknown>): Promise<IUser[]> {
    return await UserModel.find(query);
  }

  findById(id: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }

  create(data: IUser): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }

  update(id: string, data: Partial<IUser>): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }

  remove(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
