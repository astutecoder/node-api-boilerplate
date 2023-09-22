import { NextFunction, Request, Response } from 'express';
import { Controller } from '~/core/Controller';
import { Server } from '~/core/Server';
import { Service } from '~/core/Service';
import { IUser } from '~/core/models/IUser';

export class UserController extends Controller<IUser> {
  constructor(protected server: Server, public service: Service<IUser>) {
    super(server, service);

    this.middleware1 = this.middleware1.bind(this);
    this.middleware2 = this.middleware2.bind(this);
    this.middleware3 = this.middleware3.bind(this);
    this.allUsers = this.allUsers.bind(this);

    this.registerRoutes();
  }

  protected registerRoutes(): void {
    this.routes.push({
      path: '/users',
      method: 'get',
      handler: [this.middleware1, this.middleware3, this.allUsers],
    });
  }

  private middleware1(req: Request, res: Response, next: NextFunction) {
    console.log('middleware 1');
    next();
  }

  private middleware2(req: Request, res: Response, next: NextFunction) {
    console.log('middleware 2');
    next();
  }

  private middleware3(req: Request, res: Response, next: NextFunction) {
    console.log('middleware 3');
    next();
  }

  async allUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.list({});
      return res.render('pages/users', { name: 'World!', users });
    } catch (error) {
      next(error);
    }
  }
}
