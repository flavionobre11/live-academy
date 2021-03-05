// gerais
import { Module } from '@nestjs/common';

// controllers
import { CourseController } from './Controllers/course/course.controller';

// services
import { CourseService } from './Services/course/course.service';
import { UserService } from './Services/user/user.service';

// mongoose e schemas
import { MongooseModule } from '@nestjs/mongoose'
import { CourseSchema } from './Database/schema/course.schema';

// repositorios
import { CourseRepository } from './Database/repository/course.repository';

@Module({
  imports: [
    // conexao com mongodb
    MongooseModule.forRoot('mongodb://localhost:27017/live-academy', {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([
      {
        name: 'courses',
        schema: CourseSchema
      }
    ])
  ],
  controllers: [CourseController],
  providers: [
    UserService,
    CourseService,
    CourseRepository
  ],
})
export class AppModule {}
