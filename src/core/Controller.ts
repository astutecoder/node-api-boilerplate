import { IRoute } from './IRoutes';
import { Server } from './Server';

export abstract class Controller<T> {
  routes: IRoute[] = [];
  constructor(protected server: Server) {}

  protected abstract registerRoutes(): void;
}
