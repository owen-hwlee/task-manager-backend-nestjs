import { Task } from './task.model';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    addTask(name: string, seq_num: number): Task;
}
