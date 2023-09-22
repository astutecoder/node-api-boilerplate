import { Server } from './Server';

export abstract class DBServer {
  constructor(protected server: Server) {}

  abstract init(): Promise<void>;

  async start() {
    try {
      await this.init();
      this.server.start();
    } catch (error) {
      console.error('🥞 error', error.stack);
    }
  }
}
