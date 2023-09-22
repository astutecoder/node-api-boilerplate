import { IResponse } from '~/core/IResponse';
import { Service } from '~/core/Service';
import { IUser } from '~/core/models/IUser';
import { responseGenerator } from './ResponseGenerator.service';

export class UserService extends Service<IUser> {
  onlyUser() {
    throw new Error('Method not implemented');
  }

  async list(query: Record<string, unknown>): Promise<IResponse<IUser[]>> {
    const users = await this.repo.find(query);
    return responseGenerator(users);
  }

  async get(id: string): Promise<IResponse<IUser | null>> {
    throw new Error('Method not implemented.');
  }

  async create(data: IUser): Promise<IResponse<IUser | null>> {
    throw new Error('Method not implemented.');
  }

  async update(
    id: string,
    data: Partial<IUser>
  ): Promise<IResponse<IUser | null>> {
    throw new Error('Method not implemented.');
  }

  async remove(id: string): Promise<IResponse<boolean>> {
    throw new Error('Method not implemented.');
  }
}
