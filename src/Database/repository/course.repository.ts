import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CourseDTO } from "src/DTO/course.dto";
import { Course } from "src/Interfaces/course.interface";

@Injectable()
export class CourseRepository {

    constructor(
        @InjectModel('courses') private readonly courseModel: Model<Course>
    ){}

    
    async saveCourse(newCourse: CourseDTO): Promise<Course>{
        return await this.courseModel.create(newCourse)
    }

}