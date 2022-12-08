import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Data } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {
  data: any;
  iddetails(id: any) {
    throw new Error('Method not implemented.');
  }
  library(arg0: any) {
    throw new Error('Method not implemented.');
  }
  fromService="This is free service"
  private message= new BehaviorSubject<string>('default message')
  getMessage=this.message.asObservable();

  private dataSubject$: Subject<Object> = new Subject();
  dataEvent$=this.dataSubject$.asObservable();

  API_URL="http://localhost:3000/ELEMENT_DATA";
  login_URL="https://reqres.in/api/login";
  genre_URL=" http://localhost:3000/genre_data"

  constructor(private http: HttpClient) {}
  UpdateMessage(msg:string){
    this.message.next(msg);
  }
  
  
  
  getElement_Data(){
     this.http.get(this.API_URL).subscribe(val=>{
      this.dataSubject$.next(val);
      this.data = val;
    })
  }
  CreateElement_Data(data:any):Observable<any>{
    return this.http.post(this.API_URL,data)
    }

  
  deleteElement_Data(position:any):Observable<any>{
    return this.http.delete(`${this.API_URL}/${position}`);
  }
  updateElement_Data(data:any):Observable<any>{
    return this.http.put(`${this.API_URL}/${data.id}`,data);
  }
  getdetails(id:any)
  {
    return this.http.get(`${this.API_URL}/${id}`);
    
  }
  goToLogin(data:any):Observable<any>{
    return this.http.post(`${this.login_URL}`,data)
  }
  getGenre_card(){
    return this.http.get(this.genre_URL)
  }


  updateFavorites(data: any) {
    const newData = {
      ...data,
      fav: !data.fav
    }
    return this.http.put(`${this.API_URL}/${data.id}`, newData);
  }
 
  searchItem(value:any){
   
    this.dataSubject$.next(
      
      this.data.filter((val:any)=>val.bookName.toLowerCase().includes(value.toLowerCase())))
      
  }
  }
  
  






//   getUsers() {
//     return this.http.get('https://reqres.in/api/users?page=2')
//   }
// }
