import { Controller } from './Controller';
import { Dictionary, IDictionary } from './IDictonary';
import { Service } from './Service';

export abstract class Server {
  Controllers: IDictionary<Controller<unknown>> = new Dictionary();
  Services: IDictionary<any> = new Dictionary();

  abstract middlewares(): void;
  abstract start(): void;
  protected abstract registerControllers(): void;

  registerController(name: string, controller: Controller<unknown>) {
    this.Controllers.Add(name, controller);
  }

  registerService(name: string, service: any) {
    this.Services.Add(name, service);
  }
}
