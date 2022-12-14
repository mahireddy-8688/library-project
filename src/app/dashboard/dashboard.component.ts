import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of, pipe, Subject, takeUntil } from 'rxjs';
import { AddLibraryComponent } from '../add-library/add-library.component';
import { SampleServiceService } from '../sample-service.service';
import { Inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit ,OnDestroy{
  displayedColumns = ["id","bookName","author","genre","star","fav"];
  OnDestroy$=new Subject<boolean>


 
  


  constructor(private service:SampleServiceService ,private router:Router,private dialog:MatDialog,){}
  dataSource:Observable<any>=of([{}])
  ngOnInit(){
    this.service.getElement_Data()
    this.dataSource=this.service.dataEvent$
    
  }


  editRow(element:any){
    const dialogRef=this.dialog.open(AddLibraryComponent,{
      height:"400px",
      width:"300px",
      data:
      {...element,showeditbutton:true}
      
});
dialogRef.afterClosed().pipe(takeUntil(this.OnDestroy$)).subscribe()
  }
  ngOnDestroy():void{
    this.OnDestroy$.next(true);
    this.OnDestroy$.complete();
  }
  
  deleteRow(id:any){
    this.service.deleteElement_Data(id).pipe(takeUntil(this.OnDestroy$)).subscribe();
  }

  genre(){
    this.router.navigate(['genre'])
  }
  fav(){
    this.router.navigate(['fav'])
  }
  updatestar(element:any){
   this.service.updateFavorites(element).pipe(takeUntil(this.OnDestroy$)).subscribe();
      window.location.reload()

  }
  }



