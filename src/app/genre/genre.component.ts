import { Component, OnInit,OnDestroy } from '@angular/core';
import { NavigationStart, RouteConfigLoadEnd, Router } from '@angular/router';
import { filter, Observable, of, Subject, takeUntil } from 'rxjs';
import { Comedy } from '../model';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent  implements OnInit,OnDestroy{
  OnDestroy$=new Subject<boolean>
 
  genreData: Observable<Comedy[]>=of([])

  constructor(private service:SampleServiceService , private route:Router){}
  ngOnInit():void{  
    this.route.events.pipe(filter(navigate=>navigate instanceof NavigationStart)).pipe(takeUntil(this.OnDestroy$)).subscribe((urlLink:any)=>{
     
      
      if(urlLink.url.includes('Comedy')) {
        this.genreData= this.service.getComedy()
       }
       else if(urlLink.url.includes('Thriller')) {
        this.genreData= this.service.getThriller()
       }
       else if(urlLink.url.includes('Romance')) {
         this.genreData=this.service.getRomance()
       }
     

    })
    
    
  
  }
  ngOnDestroy(): void {
    this.OnDestroy$.next(true);
    this.OnDestroy$.complete();
  }
}
