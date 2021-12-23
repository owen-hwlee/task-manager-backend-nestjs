import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],     // Entry point, processes requests and returns responses
  providers: [TasksService],          // Contains all business logic
})
export class TasksModule {}
