import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent,
    children: [
      {
        path: 'add',
        component: TaskAddComponent,
      },
      {
        path: 'list',
        component: TasksListComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
