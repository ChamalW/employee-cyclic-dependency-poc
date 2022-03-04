import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './entity/project.entity';
import { Model } from 'mongoose';
import { CreateProjectInput } from './dto/project.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectRepository {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<ProjectDocument>,
  ) {}

  async saveProject(createProjectInput: CreateProjectInput) {
    // const newProject = new this.projectModel(createProjectInput);
    // return await newProject.save();
    // console.log(this.)
  }
}
