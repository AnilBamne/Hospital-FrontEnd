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
  constructor(private appointmentService:AppointmentService,private adminService:AdminService,private dataService:DataService) { }

  ngOnInit(): void {
    this.getAppointments();
    this.appointmentdata=this.dataService.appointmentList;
  }
  
  getAppointments(){
    this.adminService.GetAppointments().subscribe((response:any)=>{
      console.log(response.message);
      
      this.appointmentdata=response.data;
      console.log(this.appointmentdata);
      console.log("----***----")
    })
  }
 
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  Delete(appointmentId:any){
    console.log(appointmentId)
    this.adminService.DeleteAppointment(appointmentId).subscribe((res:any)=>{
      console.log("Appointment deleted",res.message);
    })
    
    this.adminService.GetAppointments().subscribe((res:any)=>{
      this.dataService.appointmentList=res.data;
    })
  }

  
}
