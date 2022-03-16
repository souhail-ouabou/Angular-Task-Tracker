import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Task} from '../../Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter(); 
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter(); 
  // @output go to parent component 
  constructor() { }
  faTimes = faTimes;

  ngOnInit(): void {
  }
  onDelete(task: Task | undefined){
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task | undefined){
    this.onToggleReminder.emit(task);
  }
 

}
