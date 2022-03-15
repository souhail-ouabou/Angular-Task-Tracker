import { Injectable } from '@angular/core';
import {Task} from '../Task'
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }
  getTasks() : Observable<Task[]> {
    //before json-server
    /*
     const tasks = of(TASKS);
     return tasks 
     */
    return this.http.get<Task[]>(this.apiUrl)
  }
}
