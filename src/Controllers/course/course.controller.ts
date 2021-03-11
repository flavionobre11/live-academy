import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseDTO } from 'src/DTO/course.dto';
import { Course } from 'src/Interfaces/course.interface';
import { CourseService } from 'src/Services/course/course.service';

@Controller('course')
export class CourseController {
    constructor(
        private readonly courseService: CourseService
    ){}

    @Get()
    async getAllCourses(): Promise<Course []>{
        return await this.courseService.getAllCourses()
    }

    @Get(':id')
    async getCourseById(@Param('id') id: string): Promise<Course>{
        return await this.courseService.getCourseById(id)
    }

    @Post()
    async saveCourse(@Body() newCourse: CourseDTO): Promise<Course>{
        return await this.courseService.saveCourse(newCourse)
    }

    @Put(':id')
    async updateCourse(@Param('id') id: string, @Body() course: CourseDTO): Promise<Course>{
        return await this.courseService.updateCourse(id, course)
    }

    @Delete(':id')
    async deleteCourse(@Param('id') id: string): Promise<Object>{
        return await this.courseService.deleteCourse(id)
    }
}
