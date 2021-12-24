"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTasksWithFilters(filterDto) {
        const { done, search } = filterDto;
        let tasks = this.getAllTasks();
        if (done) {
            tasks = tasks.filter((task) => task.done === done);
        }
        if (search) {
            tasks = tasks.filter((task) => {
                if (task.name.toLowerCase().includes(search)) {
                    return true;
                }
                else
                    return false;
            });
        }
        return tasks;
    }
    getTaskById(id) {
        const found = this.tasks.find((task) => task.id === id);
        if (!found) {
            throw new common_1.NotFoundException(`Task with ID "${id}" not found`);
        }
        else
            return found;
    }
    addTask(addTaskDto) {
        const { name, seq_num } = addTaskDto;
        const task = {
            id: (0, uuid_1.v4)(),
            name,
            seq_num,
            done: false,
        };
        this.tasks.push(task);
        return task;
    }
    deleteTask(id) {
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    updateTask(id, updateTaskDto) {
        const { name, seq_num } = updateTaskDto;
        const idx = this.tasks.findIndex((task) => task.id === id);
        if (idx === -1) {
            throw new common_1.NotFoundException(`Task with ID "${id}" not found`);
        }
        this.tasks[idx].name = name;
        this.tasks[idx].seq_num = seq_num;
        return this.tasks[idx];
    }
    finishTask(id) {
        const idx = this.tasks.findIndex((task) => task.id === id);
        this.tasks[idx].done = true;
        return this.tasks[idx];
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map