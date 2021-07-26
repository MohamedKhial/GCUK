import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent  {
  oldvalue :any;
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    private service:TodoService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data)
      console.log(dialogRef);
    this.oldvalue = this.data;

    }

    edit(newvalue:any){
      console.log(newvalue)
      console.log(this.data)
      this.service.putTODS(this.oldvalue,newvalue).subscribe((data)=>{

      })
    }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
