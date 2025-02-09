import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'add-task',
  standalone: true, // Marks it as a standalone component
  imports: [RouterLink, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent {

  constructor(private tserve: TaskService){}
  taskName:string='';
  task:string='';

  @HostListener('document:keydown.enter',['$event'])

  onEnter(event:KeyboardEvent){
    this.addTask()  
  }

  addTask(){
    if(this.taskName && this.task){
      this.tserve.addTask(this.taskName,this.task)
      this.taskName=''
      this.task=''
    }
}
  removeTask(){
    this.tserve.removeTasks()
  }
}
