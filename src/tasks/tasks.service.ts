import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid_v4 } from 'uuid';


@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    addTask(name: string, seq_num: number): Task {
        const task: Task = {
            id: uuid_v4(),
            name,
            seq_num,
            done: false,
        };

        this.tasks.push(task);
        return task;
    }
}
