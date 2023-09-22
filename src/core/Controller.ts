import { IRoute } from './IRoutes';
import { Server } from './Server';
import { Service } from './Service';

export abstract class Controller<T> {
  routes: IRoute[] = [];
  constructor(protected server: Server, public service?: Service<T>) {}
  protected abstract registerRoutes(): void;
}
