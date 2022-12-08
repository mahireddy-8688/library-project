import { Component,OnInit  } from '@angular/core';
import { AddLibraryComponent } from '../add-library/add-library.component';
import { SampleServiceService } from '../sample-service.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SteperComponent } from '../steper/steper.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataSource: any;
  a:any
  name:any
  f:any
  l:any
  router: any;
  
  constructor(private dailog: MatDialog, private service:SampleServiceService){}

  ngOnInit():void{
    this.a=localStorage.getItem("email")
    this.name=this.a?.split('.').join(' ').split('@',1).join('')
    this.f=((this.name?.split(' ',1))[0])[0]
    this.l=((this.name?.split(' ',2))[1])[0]
   
  }
  addlibrary(){
    const dialogref= this.dailog.open(SteperComponent);
    dialogref.afterClosed().subscribe((result: any) =>{
    });
  }

  
  logout(){

    localStorage.clear();
    this.router.navigate(['']);
  }
  onSearch(value:any){
    this.service.searchItem(value);
  }
}



