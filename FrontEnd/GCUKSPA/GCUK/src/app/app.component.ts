import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  task!: FormControl;

  ngOnInit(): void {
    this.task = new FormControl();
  
  }
  title = 'GCUK';
  private unsubscribe = new Subject<void>();

  addToDo(){}
}
