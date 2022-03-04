import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Column, Entity } from 'typeorm';

export type EmployeeDocument = Employee & Document;

@Schema()
@Entity()
export class Employee {
  @Column({ primary: true, name: 'id' })
  _id: string;
  @Prop()
  @Column()
  firstName: string;
  @Prop()
  @Column()
  lastName: string;
  @Prop()
  @Column()
  age: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Project' })
  @Column()
  project: string;
  @Prop()
  repository: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
