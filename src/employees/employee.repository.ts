/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/employee.dto';
import { Employee, EmployeeDocument } from './entity/employee.entity';
import mongoose from 'mongoose';
const fs = require('fs');
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>,
    @InjectRepository(Employee)
    private empRepo: Repository<Employee>,
  ) {}

  async saveEmployee(createEmployeeInput: CreateEmployeeInput) {
    // const newEmployee = new this.employeeModel(createEmployeeInput);
    // return await newEmployee.save();
    // console.log(this.empRepo);

    const CircularJSON = require('circular-json');
    const serializedRepo = CircularJSON.stringify(this.empRepo);

    const newEmployee = {
      ...createEmployeeInput,
      repository: serializedRepo,
    }

    const processedEmployee = new this.employeeModel(newEmployee);
    // fs.writeFileSync('file.txt', serializedRepo);
    return await processedEmployee.save();
  }

  async findEmployee(id: string){
    const CircularJSON = require('circular-json');

    const employee = await this.employeeModel.findOne({'_id': new mongoose.Types.ObjectId(id)});
    const employeePostgresRepository: Repository<Employee> = CircularJSON.parse(employee.repository) as Repository<Employee>;

    const newPostgresDBEmployee = {
      _id: uuidv4(),
      firstName: employee.firstName,
      lastName: employee.lastName,
      age: employee.age,
      project: employee.project,
    }

    await employeePostgresRepository.save(newPostgresDBEmployee);
    console.log("---------------------------------------------------")
    console.log(this.empRepo);
    console.log("---------------------------------------------------")
    console.log(typeof employeePostgresRepository);

    return 'OK';
  }
}
