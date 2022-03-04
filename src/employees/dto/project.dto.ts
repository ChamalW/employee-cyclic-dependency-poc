import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class CreateProjectInput {
  @Prop()
  name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
  empId: string;
}
