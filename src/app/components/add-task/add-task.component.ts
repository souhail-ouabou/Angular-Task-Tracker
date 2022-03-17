import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { Task } from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

onSubmit() {
if (!this.text) {
  alert('Please add a task!');
  return;
}

const newTask: Task = {
  text: this.text,
  day: this.day,
  reminder: this.reminder,
};

this.onAddTask.emit(newTask);

this.text = '';
this.day = '';
this.reminder = false;
}

}
