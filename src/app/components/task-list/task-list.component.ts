import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[];
  showList: boolean = true; // ✅ Adicionamos a variável aqui

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  completeTask(id: number) {
    this.taskService.completeTask(id);
  }
}
