import { Component, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddLibraryComponent } from '../add-library/add-library.component';
import { SampleServiceService } from '../sample-service.service';
import { Inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ["id","bookName","author","genre","star","fav"];
 
  


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


dialogRef.afterClosed().subscribe(result=>{
})
  }
  deleteRow(id:any){
    this.service.deleteElement_Data(id).subscribe();
  }


  genre(){
    this.router.navigate(['genre'])
  }
  fav(){
    this.router.navigate(['fav'])
  }
  updatestar(element:any){
    this.service.updateFavorites(element).subscribe();
      window.location.reload()

  }
  }



