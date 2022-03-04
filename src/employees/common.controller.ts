import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/employee.dto';
import { CreateProjectInput } from './dto/project.dto';
import { EmployeeRepository } from './employee.repository';
import { ProjectRepository } from './project.repository';

@Controller('/con')
export class TestController {
  constructor(
    private readonly employeeRepo: EmployeeRepository,
    private readonly projectRepo: ProjectRepository,
  ) {}

  @Post('/emp')
  async createEmployee(@Body() createEmpDto: CreateEmployeeInput) {
    return await this.employeeRepo.saveEmployee(createEmpDto);
  }

  @Post('/pro')
  async createProject(@Body() createProDto: CreateProjectInput) {
    return await this.projectRepo.saveProject(createProDto);
  }

  @Get(':id')
  async findEmp(@Param() id: string) {
    return await this.employeeRepo.findEmployee(id);
  }
}
