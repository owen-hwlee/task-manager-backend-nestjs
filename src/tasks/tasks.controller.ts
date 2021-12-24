import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AddTaskDto } from './dto/add-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    // http://localhost:3000/tasks
    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if (Object.keys(filterDto).length) {
            return this.tasksService.getTasksWithFilters(filterDto);
        } else {
            return this.tasksService.getAllTasks();
        }
    }

    // http://localhost:3000/tasks/lkdsf2lk4224
    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    addTask(
        @Body() addTaskDto: AddTaskDto
    ): Task {
        return this.tasksService.addTask(addTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        return this.tasksService.deleteTask(id);
    }

    @Patch('/:id')
    updateTask(
        @Param('id') id: string, 
        @Body() updateTaskDto: UpdateTaskDto
    ): Task {
        return this.tasksService.updateTask(id, updateTaskDto);
    }

    @Patch('/:id/done')
    finishTask(@Param('id') id: string): Task {
        return this.tasksService.finishTask(id);
    }
}
