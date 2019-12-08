import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public API: string ="http://localhost:3000/tasks";
  constructor(public http: HttpClient) { }

  getAllTasks(){
    return this.http.get(this.API);
  }

  addTask(task: Task){
    return this.http.post(this.API, task);
  }

  updateTask(task: Task){
    return this.http.put(`${this.API}/${task.id}`, {
      title: task.title,
      completed: task.completed
    })
  }

  delete(id: number){
    return this.http.delete(`${this.API}/${id}`)
  }
}
