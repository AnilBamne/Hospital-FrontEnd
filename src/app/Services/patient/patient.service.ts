import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
 
})
export class PatientService {
  base=environment.baseurl;
  constructor(private httpService:HttpService) { }
  Login(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`Patient/Login`,data,false,header);
  }

  Register(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`Patient/Register`,data,false,header);
  }
}
