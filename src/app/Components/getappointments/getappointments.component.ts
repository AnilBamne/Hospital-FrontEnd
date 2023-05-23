import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { AppointmentService } from 'src/app/Services/appointment/appointment.service';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-getappointments',
  templateUrl: './getappointments.component.html',
  styleUrls: ['./getappointments.component.scss']
})
export class GetappointmentsComponent implements OnInit{
  
  appointmentdata:any
  list:any
  constructor(private appointmentService:AppointmentService,private adminService:AdminService,private dataService:DataService) { }

  ngOnInit(): void {
    this.getAppointments();
    this.appointmentdata=this.dataService.appointmentList;
  }
  
  getAppointments(){
    this.adminService.GetAppointments().subscribe((response:any)=>{
      console.log(response.message);
      
      this.list=response.data;
      console.log(this.appointmentdata);
      console.log("----***----")
      this.appointmentdata=this.list
      console.log(this.list)
    })
  }
  RefreshEvent(event:any){
    this.getAppointments();
  }
}
