import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './common.controller';
import { EmployeeRepository } from './employee.repository';
import { Employee, EmployeeSchema } from './entity/employee.entity';
import { Project, ProjectSchema } from './entity/project.entity';
import { ProjectRepository } from './project.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Project.name, schema: ProjectSchema },
    ]),
    TypeOrmModule.forFeature([Employee]),
  ],
  controllers: [TestController],
  providers: [EmployeeRepository, ProjectRepository],
})
export class EmployeesModule {}
