import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-view-task-history',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './view-task-history.component.html',
  styleUrl: './view-task-history.component.sass'
})
export class ViewTaskHistoryComponent implements OnInit{
  
  taskNames:string[]=[]
  tasks:string[]=[]
  constructor(private tserve:TaskService){}

  ngOnInit(): void {
    this.tserve.completedTaskNamesarr.subscribe((comp)=>this.taskNames = comp)
    this.tserve.completedTasksarr.subscribe((comp2)=>this.tasks = comp2)
  }

  
}
