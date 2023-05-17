import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base=environment.baseurl;
  token:any
  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token')
   }

  //login method
  Login(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`Admin/login?email=`+data.email+`&password=`+data.password,{},false,header);
  }
  //Check who is logging in
  CheckUser(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`Admin/CheckUser?email=`+data.email+`&password=`+data.password,{},false,header);
  }
  GetAllDocs(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(this.base+`Admin/GetAllDocs`,true,header)
  }
  GetAppointments(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(this.base+`Appointment/GetAllAppointments`,true,header);
  }
  DeleteAppointment(Id:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.deletService(this.base+`Admin/DeleteAppointment?Id=`+Id,true,header)
  }
}
