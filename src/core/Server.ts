import { Controller } from './Controller';
import { Dictionary, IDictionary } from './IDictonary';

export abstract class Server {
  Controllers: IDictionary<Controller<unknown>> = new Dictionary();
  abstract middlewares(): void;
  abstract start(): void;
  protected abstract registerControllers(): void;

  registerController(name: string, controller: Controller<unknown>) {
    this.Controllers.Add(name, controller);
  }
}
