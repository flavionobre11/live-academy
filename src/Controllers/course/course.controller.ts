import { Body, Controller, Post } from '@nestjs/common';
import { CourseDTO } from 'src/DTO/course.dto';
import { Course } from 'src/Interfaces/course.interface';
import { CourseService } from 'src/Services/course/course.service';

@Controller('course')
export class CourseController {
    constructor(
        private readonly courseService: CourseService
    ){}

    @Post()
    async saveCourse(@Body() newCourse: CourseDTO): Promise<Course>{
        return await this.courseService.saveCourse(newCourse)
    }
}
