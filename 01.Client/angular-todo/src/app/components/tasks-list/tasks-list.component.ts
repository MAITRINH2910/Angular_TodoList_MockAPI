import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/service/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  public tasks: Task[] = [];
  public sub: Subscription;
  public subParam: Subscription;
  public task: Task;

  constructor(
    public taskService: TaskService,
    public activatedRoute: ActivatedRoute
  ) { }

  public status: number = 0;
  loadParam() {
    this.subParam = this.activatedRoute.params.subscribe((data: Params) => {
      this.status = data.completed ? (data.completed == 'true' ? 1 : -1) : 0;
      console.log(this.status);
    })
  }

  ngOnInit() {
    this.sub = this.taskService.getAllTasks().subscribe((tasks: Task[]) => {
      this.subParam = this.activatedRoute.params.subscribe((data: Params) => {
        let status1 = data.completed ? (data.completed == 'true' ? 1 : -1) : 0;
        this.tasks = tasks.filter(data => {
          if (status1 == 1) {
            return data.completed == true;
          } else if (status1 == -1) {
            return data.completed == false;
          } else {
            return data;
          }
        })
      })
    })
    this.loadParam();
  }

  ngOnDestroy() {
    if (this.sub) {
      return this.sub.unsubscribe();
    }
  }

  onSetStatus(task: Task){
    console.log(task);
    task.completed = !task.completed;
    this.sub = this.taskService.updateTask(task).subscribe((data: Task)=>{
      this.updateData(data);
    })
  }

  updateData(data){
    for (var i=0; i<this.tasks.length; i++){
      if (this.tasks[i].id==data.id){
        this.tasks[i] = data;
        break;
      }
    }
  }
}
