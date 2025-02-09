import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        loadComponent() {
            return import('../app/pages/home/home.component').then(m=>m.HomeComponent)
        },
    },
    {
        path:'AT',
        pathMatch:'full',
        loadComponent() {
            return import('../app/pages/add-task/add-task.component').then(m=>m.AddTaskComponent)
        },
    },
    {
        path:'VT',
        pathMatch:'full',
        loadComponent() {
            return import('../app/pages/view-task/view-task.component').then(m=>m.ViewTaskComponent)
        },
    },
    {
        path:'VTH',
        loadComponent() {
            return import('../app/pages/view-task-history/view-task-history.component').then(m=>m.ViewTaskHistoryComponent)
        },
    }
];
