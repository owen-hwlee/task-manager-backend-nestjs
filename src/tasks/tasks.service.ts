import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid_v4 } from 'uuid';
import { AddTaskDto } from './dto/add-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';


@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { done, search } = filterDto;
        let tasks = this.getAllTasks();
        if (done) {
            tasks = tasks.filter((task: Task) => task.done === done);
        }
        if (search) {
            tasks = tasks.filter((task: Task) => {
                if (task.name.toLowerCase().includes(search)) {
                    return true;
                } else return false;
            })
        }
        return tasks;
    }

    getTaskById(id: string): Task {
        const found = this.tasks.find((task: Task) => task.id === id);
        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        } else return found;
    }
    
    addTask(addTaskDto: AddTaskDto): Task {
        const { name, seq_num } = addTaskDto;
        const task: Task = {
            id: uuid_v4(),
            name,
            seq_num,
            done: false,
        };
        
        this.tasks.push(task);
        return task;
    }
    
    deleteTask(id: string): void {
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter((task: Task) => task.id !== id);
    }
    
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Task {
        const { name, seq_num } = updateTaskDto;
        const idx: number = this.tasks.findIndex((task: Task) => task.id === id);
        if (idx === -1) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        this.tasks[idx].name = name;
        this.tasks[idx].seq_num = seq_num;

        return this.tasks[idx];
    }

    finishTask(id: string): Task {
        const idx: number = this.tasks.findIndex((task: Task) => task.id === id);
        this.tasks[idx].done = true;
        return this.tasks[idx];
    }
}
