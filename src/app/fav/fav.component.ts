import { Component } from '@angular/core';
import { filter, map, Observable, of, pipe } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
  displayedColumns = ["id","bookName","author","genre","star"];
  dataSource:Observable<any>=of([{}])
  constructor (private service:SampleServiceService){}
  ngOnInit(){
    this.service.getElement_Data()
    this.dataSource=this.service.dataEvent$ .pipe(map((a:any)=>{
      
      return(a.filter((n:any)=>n.fav))
    }))
   

  }
    

  


}
