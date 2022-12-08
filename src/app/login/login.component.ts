import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleServiceService } from '../sample-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  formdata:any;
  data:any;
  constructor(private router:Router, private service:SampleServiceService){}
  ngOnInit(){
    this.formdata =new FormGroup({
      email:new FormControl(this.data?.email ?? ''),
      password: new FormControl(this.data?.password ?? ''),
    });
  }
  home(){
    this.router.navigate(['dashboard/'])
  }
  login(data:any){
    this.service.goToLogin(data).subscribe(a=>{
      localStorage.setItem('login','true')
      localStorage.setItem('email',data.email)
      this.router.navigate(['/dashboard'])
    });
    }
}




