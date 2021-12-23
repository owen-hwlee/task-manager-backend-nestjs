import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    addTask(
        @Body('name') name: string,
        @Body('seq_num') seq_num: number,
    ): Task {
        return this.tasksService.addTask(name, seq_num);
    }
}
