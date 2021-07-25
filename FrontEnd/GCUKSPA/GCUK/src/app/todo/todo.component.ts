import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Subject } from 'rxjs';
import { TodoService } from '../core/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  alltasks: Array<string>=[];
  objectKeys = Object.keys;
    Completetasks:Array<string>=[];

iscomplete:boolean=false;
  constructor(private service:TodoService) { }
  task!: FormControl;

   ngOnInit(): void {
    this.task = new FormControl();
    this.service.getTods().subscribe((data)=>{
    if(data != null){


      this.alltasks.push( data);
      console.log(this.objectKeys(data));
    }


    })
  
  }


  addToDo(){
    this.service.postTODS(this.task.value).subscribe((data)=>{
      console.log(data);
    this.alltasks.push(this.task.value);

      console.log(this.objectKeys(data));
    });
  }
  onCompleteToDo(toDo: MatCheckboxChange,task:string,key:any) {
   
    delete this.alltasks[key];
    this.Completetasks.push(task);
    this.service.remove(task).subscribe((data)=>{
      console.log(data);
    });
 
  }
  onreturnToDo(toDo: MatCheckboxChange,task:string,key:any) {
  
    delete this.Completetasks[key];
    this.alltasks.push( task);

    console.log(task);
    this.service.postTODS(task).subscribe((data)=>{
      console.log(data);
    // this.alltasks =[];


    });
 
  }
}
