import mongoose, { Document } from 'mongoose';
import { IUser } from '~/core/models/IUser';

const UserSchema = new mongoose.Schema<IUser & Document>({
  name: { type: String, required: true },
});

export default mongoose.model('User', UserSchema);
