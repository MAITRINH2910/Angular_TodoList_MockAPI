import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/service/task.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  public formAdd: FormGroup;
  public oneTask1: Task;
  public sub: Subscription
  constructor(
    public taskService: TaskService,
    public routerService: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {  
    this.addForm();
    this.oneTask1=new Task();
    
    
  }
  addForm(){
    this.formAdd = this.formBuilder.group({
      todo: ['', [
        Validators.required,
      ]],
    })
  }

  onAddTodo() {
    this.sub = this.taskService.addTask(this.oneTask1).subscribe((data:Task) => {
      if (data && data.id){
        this.routerService.navigate(['tasks/list',{completed: false}]);
      }
      console.log(data);
    })
  }

  // onSubmit(title, e){
  //   e.preventDefault();
  //   this.oneTask = new Task(title);
  // }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
}
