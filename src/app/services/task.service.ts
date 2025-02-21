import { Injectable } from '@angular/core';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(name: string) {
    const newTask: Task = { id: Date.now(), name, completed: false };
    this.tasks.push(newTask);
  }

  completeTask(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.completed = true;
  }
}
