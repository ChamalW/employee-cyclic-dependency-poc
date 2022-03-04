import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/entity/employee.entity';

@Module({
  imports: [
    EmployeesModule,
    MongooseModule.forRoot(
      'mongodb+srv://api_user:1qaz2wsx@cluster0.wnklx.mongodb.net/employees_poc',
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '158.101.160.214',
      port: 5432,
      username: 'vehicleapp',
      password: 'vehicleUser@123',
      database: 'VehicleMDB',
      entities: [Employee],
      synchronize: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
