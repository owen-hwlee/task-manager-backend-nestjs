import { Task } from './task.model';
import { AddTaskDto } from './dto/add-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: string): Task;
    addTask(addTaskDto: AddTaskDto): Task;
    deleteTask(id: string): void;
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Task;
    finishTask(id: string): Task;
}
