import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddLibraryComponent } from '../add-library/add-library.component';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit  {

  
  iddetails: any;
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
  this.service.deleteElement_Data(id).subscribe(data=>{
    this.router.navigate(['/dashboard'])
  });
 

}


  ngOnInit(): void {
    this.service.getdetails(this.route.snapshot.params['id'])
    .subscribe((abc: any)=>{
      this.iddetails=abc
      console.log('xyz',abc)

    }
    )

}}

