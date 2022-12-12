import { Component, Inject, inject, Input, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SampleServiceService } from '../sample-service.service';
import {MatFormField, MatFormFieldAppearance,MatFormFieldControl,MatFormFieldDefaultOptions} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit,OnDestroy {
  formdata:any;
  OnDestroy$=new Subject<boolean>;

  

  constructor(public dialog: MatDialog, private service:SampleServiceService,@Inject(MAT_DIALOG_DATA) public data:any,private _snackBar:MatSnackBar){}
  ngOnInit(): void {
    this.formdata=new FormGroup({
      bookName: new FormControl(this.data?.bookName??"",Validators.required),
      id: new FormControl(this.data?.id??""),
      author:new FormControl(this.data?.author??""),
      genre: new FormControl(this.data?.genre??""),
    });
   
    
  }
  ngOnDestroy(): void {
    this.OnDestroy$.next(true);
    this.OnDestroy$.complete();
  }


  update(data:any){
    this.service.updateElement_Data(data).pipe(takeUntil(this.OnDestroy$)).subscribe(()=>{
       this.dialog.closeAll();
        
    })
  }


  submit(data:any){

    this. service.CreateElement_Data({...data.value, id:data.value["id"]}).pipe(takeUntil(this.OnDestroy$)).subscribe();
    this.dialog.closeAll();
   
  }
  snackbar(){
    this._snackBar.open("update Succesfully");

  }

}
