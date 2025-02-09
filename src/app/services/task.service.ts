import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit{
  tasksarr = new BehaviorSubject<string[]>([])
  taskNamesarr = new BehaviorSubject<string[]>([])
  completedTaskNamesarr = new BehaviorSubject<string[]>([])
  completedTasksarr = new BehaviorSubject<string[]>([])
  splicer1:string[]=[]
  splicer2:string[]=[]

  tasks$ = this.tasksarr.asObservable()
  taskNames$ = this.taskNamesarr.asObservable()
  completedTasks$ = this.completedTasksarr.asObservable()
  completedTaskNames$ = this.completedTaskNamesarr.asObservable()

  ngOnInit(): void {
    console.log(this.splicer1);
    console.log(this.splicer2);
    
  }



  addTask(item: string,item2:string){
    const currentTaskNames = this.taskNamesarr.value;
    const currentTasks = this.tasksarr.value;
    this.taskNamesarr.next([...currentTaskNames,item]) 
    this.tasksarr.next([...currentTasks,item2]) 
    console.log(this.taskNamesarr);
    console.log(this.tasksarr);
  }
  removeTasks(){
    this.tasksarr.next([])
    this.taskNamesarr.next([])
  }
  completeTask(taskIndex:number){
    const currentTaskNames = this.taskNamesarr.value
    const currentTasks = this.tasksarr.value
    const currentCompletedTaskNames = this.completedTaskNamesarr.value
    const currentCompletedTasks = this.completedTasksarr.value

    const Es1 = currentTaskNames.splice(taskIndex,1)[0]  
    const Es2 = currentTasks.splice(taskIndex,1)[0]  

    this.splicer1.push(Es1)
    this.splicer2.push(Es2)

    console.log(Es2);
    console.log(Es1);
    


    const updatedCompletedTaskNames = [...currentCompletedTasks,Es1]
    const updatedCompletedTasks = [...currentCompletedTasks,Es2]

    this.taskNamesarr.next(currentTaskNames)
    this.tasksarr.next(currentTasks)
    this.completedTaskNamesarr.next(updatedCompletedTaskNames)
    this.completedTasksarr.next(updatedCompletedTasks)

    console.log(updatedCompletedTaskNames);
    console.log(updatedCompletedTasks);
    
  }
}
