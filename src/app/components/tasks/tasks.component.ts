import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //tasks : Task[] = TASKS;
  tasks : Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //brfore observable
    //this.tasks = this.taskService.getTasks()
    //after
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks = tasks))
  }

}
