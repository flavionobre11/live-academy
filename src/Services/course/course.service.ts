import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { CourseRepository } from 'src/Database/repository/course.repository';
import { CourseDTO } from 'src/DTO/course.dto';
import { Course } from 'src/Interfaces/course.interface';

@Injectable()
export class CourseService {
    constructor(
        private readonly courseRepository: CourseRepository
    ){}

    /**
     * Metodo de course service responsavel por salvar um curso
     * @param newCourse Informacoes do novo curso a ser salvo.
     * @returns O curso salvo.
     */
    async saveCourse(newCourse: CourseDTO): Promise<Course>{
        try {
            const savedCourse = await this.courseRepository.saveCourse(newCourse)
            if(!savedCourse)
                throw new BadRequestException("Não foi possivel salvar o curso")
            return savedCourse
        } catch (err) {
            throw new BadRequestException("Não foi possivel salvar o curso.")
        }
    }
}
