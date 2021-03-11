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
     * Metodo que retorna todos os cursos
     */
    async getAllCourses(): Promise<Course []>{
        try {
            const courses = await this.courseRepository.getAllCourses()
            if(!courses.length)
                throw new BadRequestException("Não foi possivel encontrar cursos.")
            return courses
        } catch (err) {
            throw new BadRequestException("Não foi possivel encontrar cursos.")
        }
    }

    /**
     * Metodo que retorna um curso especifico
     * @param id id do curso que deseja buscar
     */
    async getCourseById(id: string): Promise<Course>{
        try {
            const course = await this.courseRepository.getCourseById(id)
            if(!course)
                throw new BadRequestException("Não foi possivel encontrar o curso.")
            return course
        } catch (err) {
            throw new BadRequestException("Não foi possivel encontrar o curso.")
        }
    }

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

    /**
     * Metodo que atualiza um curso
     * @param id id do curso que deseja atualizar
     * @param course informações para atualização
     */
    async updateCourse(id: string, course: CourseDTO): Promise<Course>{
        try {
            return await this.courseRepository.updateCourse(id, course)
        } catch (err) {
            throw new BadRequestException("Não foi possivel atualizar o curso.")
        }
    }

    /**
     * Metodo que deleta um curso
     * @param id id do curso que deseja deletar
     */
    async deleteCourse(id: string): Promise<Object>{
        try {
            const course = await this.courseRepository.deleteCourse(id)
            return {message: `O curso '${course.title}' foi deletado com sucesso.`}
        } catch (err) {
            throw new BadRequestException("Não foi possivel deletar o curso.")
        }
    }
}
