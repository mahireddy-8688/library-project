import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output,OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { AddLibraryComponent } from '../add-library/add-library.component';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit,OnDestroy{
  iddetails: any;
  OnDestroy$=new Subject<boolean>
  out: any;
  constructor (private dialog:MatDialog, private service:SampleServiceService,private route:ActivatedRoute, private router:Router){}
  editRow(iddetails:any){
    const dialogRef=this.dialog.open(AddLibraryComponent,{
      height:"400px",
      width:"300px",
      data:
      {...iddetails,showeditbutton:true}
      
});
}
deleteRow(id:any){
  this.service.deleteElement_Data(id).pipe(takeUntil(this.OnDestroy$)).subscribe(()=>{
    this.router.navigate(['/dashboard'])
  });
 

}
  ngOnInit(): void {
    this.service.getdetails(this.route.snapshot.params['id'])
    .pipe(takeUntil(this.OnDestroy$)) .subscribe((details: any)=>{
      this.iddetails=details

    }
    )

}
ngOnDestroy(): void {
  this.OnDestroy$.next(true);
  this.OnDestroy$.complete();
}
}

