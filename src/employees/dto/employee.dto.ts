import { Prop } from '@nestjs/mongoose';

export class CreateEmployeeInput {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  age: number;
  @Prop()
  project: string;
}
