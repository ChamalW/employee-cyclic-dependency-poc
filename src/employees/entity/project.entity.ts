import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  _id: string;
  @Prop()
  name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
  empId: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
