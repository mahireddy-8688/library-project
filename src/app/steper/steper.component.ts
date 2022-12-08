import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ɵNgNoValidate} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { Country, State, City }  from 'country-state-city';
import {  ElementRef, VERSION, ViewChild } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';
import { MatDialog, } from '@angular/material/dialog';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.css']
})
export class SteperComponent implements OnInit {
  states:any
  
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
  // fourthFormGroup = this._formBuilder.group({
  //  country : ['', Validators.required],
  // });

  isEditable = false;






  fourthFormGroup:any
  country=new FormControl(null,Validators.required)
  state= new FormControl(null, Validators.required )
 countries:any
  //fourthFormGroup: FormGroup<{ country: FormControl<null>; state: FormControl<null>; }>;
 
 constructor(private _formBuilder: FormBuilder,private service:SampleServiceService, public dailog:MatDialog) {}

 ngOnInit(): void {
   this.countries=Country.getAllCountries()
    // console.log(Country.getAllCountries())
this.fourthFormGroup = new FormGroup({
  country:this.country,
  state:this.state

})

this.country.valueChanges.subscribe((d:any)=>{
  this.states=State.getStatesOfCountry(d.isoCode)
  console.log('----',d)
  console.log('----',this.states)

})
  }
  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
  }
  form3(){
    console.log(this.thirdFormGroup.value);
  }
  form4(){
    console.log(this.fourthFormGroup.value);
    this.service.CreateElement_Data({...this.firstFormGroup.value,...this.secondFormGroup.value}).subscribe(a=>{
      console.log('---',a);
    })
    this.dailog.closeAll();
  }


 


}



//   @ViewChild('country')
//   country!: ElementRef;
//   @ViewChild('city') city!: ElementRef
//   @ViewChild('state')
//   state!: ElementRef;
//   name = 'Angular ' + VERSION.major;
//   countries = Country.getAllCountries();
//   states : any;


//   selectedCountry:any
//   selectedState:any
//   selectedCity:any
//   cities:any
  

//   onCountryChange($event:any): void {
//     this.states = State.getStatesOfCountry(JSON.parse(this.country.nativeElement.value).isoCode);
//     this.selectedCountry = JSON.parse(this.country.nativeElement.value);
//     this.cities = this.selectedState = this.selectedCity = null;
//   }

//   onStateChange($event:any): void {
//     this.cities = City.getCitiesOfState(JSON.parse(this.country.nativeElement.value).isoCode, JSON.parse(this.state.nativeElement.value).isoCode)
//     this.selectedState = JSON.parse(this.state.nativeElement.value);
//     this.selectedCity = null;

//   }

//   onCityChange($event:any): void {
//     this.selectedCity = JSON.parse(this.city.nativeElement.value)
//   }

//   clear(type: string): void {
//     switch(type) {
//       case 'country':
//         this.selectedCountry = this.country.nativeElement.value = this.states = this.cities = this.selectedState = this.selectedCity = null;
//         break;
//       case 'state':
//         this.selectedState = this.state.nativeElement.value = this.cities = this.selectedCity = null;
//         break;
//       case 'city':
//         this.selectedCity = this.city.nativeElement.value = null;
//         break;
//     }
//   }
//   constructor(private _formBuilder:FormBuilder){}
//   ngOnInit(): void {
//     console.log(Country.getAllCountries())
//     console.log(State.getAllStates());
//   }
// }

//   states: any[] = [{
//     id:1,
//     name:"Andrapradesh",
//     code:"ap"
//   },
// {
//   id:2,
//   name:"Telengana",
//   code:"TS"
// },
// {
//   id:3,
//   name:"Tamil Nadu",
//   code:"TN"
// },
// {
//   id:4,
//   name:"karanataka",
//   code:"Ks"
// },
// ]
// districts=[{
//   id:1,
//   name:"Krishna",
//   s_id:1

// },
// {
//   id:2,
//   name:"East Godavari",
//   s_id:1
// },
// {
//   id:3,
//   name:"West Godavari",
//   s_id:1
// },
// {
//   id:4,
//   name:"Guntur",
//   s_id:1
// },
// {
//   id:5,
//   name:"visakhapatanam",
//   s_id:1
// },
// {
//   id:6,
//   name:"Hyderabad",
//   s_id:2
// },
// {
//   id:7,
//   name:"Warangal",
//   s_id:2
// },
// {
//   id:8,
//   name:"Karimnagar",
//   s_id:2
// },
// {
//   id:9,
//   name:"Medak",
//   s_id:2
// },
// {
//   id:10,
//   name:"suryapet",
//   s_id:2
// },
// {
//   id:11,
//   name:"Chennai",
//   s_id:3
// },
// {
//   id:12,
//   name:"Coimbatore",
//   s_id:3
// },
// {
//   id:13,
//   name:"Vellore",
//   s_id:3
// },
// {
//   id:14,
//   name:"Madurai",
//   s_id:3
// },
// {
//   id:15,
//   name:"Thanjavur",
//   s_id:3
// },
// {
//   id:16,
//   name:"Mysur",
//   s_id:4
// },
// {
//   id:17,
//   name:"Bengaluru",
//   s_id:4
// },

// {
//   id:18,
//   name:"Ballari",
//   s_id:4
// },
// {
//   id:19,
//   name:"Raichur"
// },
// // ]
// filteredStates = this.States
//   States: any;
//   filteredcities: any;



  

