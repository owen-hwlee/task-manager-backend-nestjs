import { AddTaskDto } from './dto/add-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: string): Task;
    addTask(addTaskDto: AddTaskDto): Task;
    deleteTask(id: string): void;
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Task;
    finishTask(id: string): Task;
}
