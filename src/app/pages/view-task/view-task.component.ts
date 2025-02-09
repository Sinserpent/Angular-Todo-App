import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-view-task',
  standalone: true, // Marks it as a standalone component
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.sass'], // Fixed "styleUrl" to "styleUrls"
})
export class ViewTaskComponent implements OnInit {
  task: string[] = [];
  tasksName: string[] = [];
  checkedTasks: boolean[] = [];

  constructor(private tserve: TaskService) {}

  ngOnInit() {
    this.tserve.taskNames$.subscribe((updatedarr) => {
      this.tasksName = updatedarr;
      this.updateCheckedTasks(); // Ensure checkedTasks updates after tasksName
    });

    this.tserve.tasks$.subscribe((updatedarr2) => {
      this.task = updatedarr2;
      this.updateCheckedTasks(); // Ensure checkedTasks updates after task
    });
  }

  isChecked(taskIndex: number): boolean {
    return this.checkedTasks[taskIndex] || false;
  }

  onCheckboxChange(taskIndex: number, $event: any): void {
    this.checkedTasks[taskIndex] = $event.target.checked;
    if ($event.target.checked) {
      this.tserve.completeTask(taskIndex);
    }
  }

  trackByIndex(index: number, task: string): any {
    return task; // Use task instead of index if tasks are unique
  }

  private updateCheckedTasks() {
    this.checkedTasks = this.task.map(() => false); // Ensure alignment with task array
  }
  
}

