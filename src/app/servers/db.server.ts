import mongoose from 'mongoose';
import { DBServer } from '~/core/DBServer';
import { Server } from '~/core/Server';

export class MongoServer extends DBServer {
  constructor(protected server: Server) {
    super(server);
  }

  async init(): Promise<void> {
    try {
      await mongoose.connect(process.env.DB_CONNECTION_URL!);
      console.log('🥞 Mongodb connected');
    } catch (error) {
      throw error;
    }
  }
}
