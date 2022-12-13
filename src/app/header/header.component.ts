import { Component,OnInit  } from '@angular/core';
import { AddLibraryComponent } from '../add-library/add-library.component';
import { SampleServiceService } from '../sample-service.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SteperComponent } from '../steper/steper.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mail:any
  name:any
  first:any
  last:any
  
  
  constructor(private dailog: MatDialog, private service:SampleServiceService,private route:Router){}

  ngOnInit():void{
    this.mail=localStorage.getItem("email")
    this.name=this.mail?.split('.').join(' ').split('@',1).join('')
    this.first=((this.name?.split(' ',1))[0])[0]
    this.last=((this.name?.split(' ',2))[1])[0]
   
  }
  addlibrary(){
    const dialogref= this.dailog.open(SteperComponent);
    dialogref.afterClosed().subscribe((result: any) =>{
    });
  }

  
  logout(){

    localStorage.clear();
    this.route.navigate(['']);
  }
  onSearch(value:any){
    this.service.searchItem(value);
  }
}



