import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Subject } from 'rxjs';
import { TodoService } from '../core/services/todo.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private service:TodoService,public dialog: MatDialog
    , private tostar: ToastrService,
    ) { }
  task!: FormControl;

   ngOnInit(): void {
    this.task = new FormControl();
    this.service.getTods().subscribe((data)=>{
    if(data != null)
   {
 
console.log(data)
      this.alltasks.push( data);
      console.log(this.objectKeys(data));
    }


    })
  
  }


  addToDo(){

    this.service.postTODS(this.task.value).subscribe((data)=>{
    this.alltasks.push(this.task.value);
      this.tostar.success('Submitted Successfully', 'Task Create');
    },(err)=>{
      this.tostar.error('Not Submitted Successfully', 'Task Create');
    });
  }
  onCompleteToDo(toDo: MatCheckboxChange,task:string,key:any) {
    delete this.alltasks[key];
    this.Completetasks.push(task);
    this.service.remove(task).subscribe((data)=>{
      console.log(data);
      this.tostar.error('Deleted Successfully', 'Task delete');
    },(err)=>{
      this.tostar.info('Not Submitted Successfully', 'Task Create');
    });
 
  }
  onreturnToDo(toDo: MatCheckboxChange,task:string,key:any) {
    delete this.Completetasks[key];
    this.alltasks.push( task);
    this.tostar.success('Returned Successfully', 'Task');
    this.service.postTODS(task).subscribe((data)=>{



    },(err)=>{
      this.tostar.info('Could not return Successfully', 'Task');

    });
 
  }
edit(oldvalue:any,newvalue:any){
  this.service.putTODS(oldvalue,newvalue).subscribe((data)=>{

  })
}
openDialog(oldvalue:any): void {
  const dialogRef = this.dialog.open(EditDialogComponent,{
    width: '250px',
    data: oldvalue
  }  );

  dialogRef.afterClosed().subscribe(result => {
this.alltasks[this.alltasks.indexOf(oldvalue)] = result;
    this.tostar.info('The dialog was closed', 'Task');

    console.log('The dialog was closed');
    
  });
}


}
