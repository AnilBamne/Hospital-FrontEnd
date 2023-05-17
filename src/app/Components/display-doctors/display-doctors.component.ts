import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-display-doctors',
  templateUrl: './display-doctors.component.html',
  styleUrls: ['./display-doctors.component.scss']
})
export class DisplayDoctorsComponent implements OnInit {
  listOfDocs:any=[];
  constructor(private adminService:AdminService,private dataService:DataService) { }

  ngOnInit(): void {
    this.GetAllDoctors()
   }
   ngOnChanges(){
     this.GetAllDoctors()
   }
   ngAfterViewInit(){
     this.GetAllDoctors()
   }
   GetAllDoctors(){
     this.adminService.GetAllDocs().subscribe((response:any)=>{
       console.log(response.message);
       this.listOfDocs=response.data;
       console.log(this.listOfDocs)
     })
   }

}
