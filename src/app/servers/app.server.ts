import cors from 'cors';
import express, {
  Application,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import path from 'path';
import { Server } from '~/core/Server';
import { UserRepository } from '~/interactors/repositories/User.repo';
import { responseGenerator } from '~/interactors/services/ResponseGenerator.service';
import { UserService } from '~/interactors/services/User.service';
import { UserController } from '../controllers/User.controller';

export class ExpressServer extends Server {
  protected app: Application;
  private port = process.env.PROT || 5432;

  constructor() {
    super();
    this.app = express();
  }

  private globalErrorHandler(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.error(error.stack);

    let statusCode = 500;
    if ('statusCode' in error) {
      statusCode = error.statusCode as number;
    }

    return res
      .status(statusCode)
      .json(responseGenerator(null, [{ msg: error.message }]));
  }

  protected registerControllers() {
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);

    // register services
    this.registerService('User', userService);

    // register controllers
    this.registerController('User', new UserController(this, userService));
  }

  middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
    // view path & engine
    this.app.set('views', path.resolve(__dirname, '../views'));
    this.app.set('view engine', 'ejs');
  }

  start(): void {
    try {
      this.middlewares();

      // registering controllers
      this.registerControllers();
      // registering controllers routes
      this.Controllers.Keys().forEach((controller) => {
        this.Controllers.Item(controller).routes.forEach((route) => {
          this.app[route.method](route.path, route.handler as RequestHandler);
        });
      });

      // global error handler
      this.app.use(this.globalErrorHandler);

      // listen to requests
      this.app.listen(this.port, () => {
        console.log('🚀 App server is up and running on port:', this.port);
      });
    } catch (error) {}
  }
}
