import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit,OnDestroy{
  formdata:any;
  data:any;
  OnDestroy$=new Subject <boolean>
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
    this.service.goToLogin(data).pipe(takeUntil(this.OnDestroy$)).subscribe(a=>{
      localStorage.setItem('login','true')
      localStorage.setItem('email',data.email)
      this.router.navigate(['/dashboard'])
    });
    }
    ngOnDestroy(): void {
      this.OnDestroy$.next(true);
      this.OnDestroy$.complete();
    }
}




