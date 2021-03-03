import { Module } from '@nestjs/common';
import { CursosService } from './services/cursos/cursos.service';
import { CursosController } from './controllers/cursos/cursos.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ DatabaseModule],
  controllers: [CursosController],
  providers: [CursosService],
})
export class AppModule {}
