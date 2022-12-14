import { Component, OnInit,OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ɵNgNoValidate} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { Country, State, City }  from 'country-state-city';
import {  ElementRef, VERSION, ViewChild } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';
import { MatDialog, } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.css']
})
export class SteperComponent implements OnInit,OnDestroy {
  states:any
  OnDestroy$=new Subject<boolean>
  firstFormGroup = this._formBuilder.group({
    bookName: ['', Validators.required],
    id:['',Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    author: ['', Validators.required],
    genre:['',Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
   Gender : ['', Validators.required],
  });


  isEditable = false;
  fourthFormGroup:any
  country=new FormControl(null,Validators.required)
  state= new FormControl(null, Validators.required )
 countries:any
 
 constructor(private _formBuilder: FormBuilder,private service:SampleServiceService, public dailog:MatDialog) {}

 ngOnInit(): void {
   this.countries=Country.getAllCountries()
this.fourthFormGroup = new FormGroup({
  country:this.country,
  state:this.state

})

this.country.valueChanges.pipe(takeUntil(this.OnDestroy$)).subscribe((country:any)=>{
  this.states=State.getStatesOfCountry(country.isoCode)


})
  }
  ngOnDestroy(): void {
    this.OnDestroy$.next(true);
    this.OnDestroy$.complete();
  }
  form1(){
    (this.firstFormGroup.value);
  }

  form2(){
    (this.secondFormGroup.value);
  }
  form3(){
    (this.thirdFormGroup.value);
  }
  form4(){
    (this.fourthFormGroup.value);
    this.service.CreateElement_Data({...this.firstFormGroup.value,...this.secondFormGroup.value}).pipe(takeUntil(this.OnDestroy$)).subscribe(a=>{
    
    })
    this.dailog.closeAll();
  }

}





  

