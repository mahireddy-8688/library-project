import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLibraryComponent } from '../add-library/add-library.component';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() value:any
  @Output() parentEditFunction= new EventEmitter<any>()
  @Output() parentDelFunction= new EventEmitter<any>()



  route: any;
  constructor (private service:SampleServiceService ,private dialog:MatDialog,){}
 
  editRow(){
    this.parentEditFunction.emit(this.value)

  }
  deleteRow(){
    this.parentDelFunction.emit(this.value.id)
     }

}

  
  

  
  


