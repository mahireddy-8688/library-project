import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent  implements OnInit{

  genreData:any
  constructor(private service:SampleServiceService){}

  ngOnInit():void{
    this.service.getGenre_card().subscribe((data)=>{
      this.genreData=data
    })
  }
  
  
  

}
