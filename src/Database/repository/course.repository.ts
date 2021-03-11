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

    /**
     * Metodo que retorna todos os cursos
     */
    async getAllCourses(): Promise<Course []>{
        return await this.courseModel.find({})
    }

    /**
     * Metodo que retorna um curso especifico
     * @param id id do curso que deseja buscar
     */
    async getCourseById(id: string): Promise<Course>{
        return await this.courseModel.findById({ _id: id })
    }

    /**
     * Metodo de course service responsavel por salvar um curso
     * @param newCourse Informacoes do novo curso a ser salvo.
     * @returns O curso salvo.
     */
    async saveCourse(newCourse: CourseDTO): Promise<Course>{
        return await this.courseModel.create(newCourse)
    }

    /**
     * Metodo que atualiza um curso
     * @param id id do curso que deseja atualizar
     * @param course informações para atualização
     */
    async updateCourse(id: string, course: CourseDTO): Promise<Course>{
        return await this.courseModel.findByIdAndUpdate(
            { _id: id}, 
            {$currentDate: { lastModify: true }, $set: course },
            { new: true }
        )
    }

    /**
     * Metodo que deleta um curso
     * @param id id do curso que deseja deletar
     */
    async deleteCourse(id: string): Promise<Course>{
        return await this.courseModel.findByIdAndDelete({ _id: id })
    }

}