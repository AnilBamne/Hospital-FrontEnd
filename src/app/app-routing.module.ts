import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { GetappointmentsComponent } from './Components/getappointments/getappointments.component';
import { RegisterDoctorComponent } from './Components/register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './Components/register-patient/register-patient.component';
import { GetdoctorsComponent } from './Components/getdoctors/getdoctors.component';
import { TakeappointmentComponent } from './Components/takeappointment/takeappointment.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { DisplayDoctorsComponent } from './Components/display-doctors/display-doctors.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:AdminLoginComponent},
  {path:'registerDoc',component:RegisterDoctorComponent},
  {path:'patientregister',component:RegisterPatientComponent},
  
  {path:'admin',component:AdminDashboardComponent,
  children:[
    
    {path:'appointments',component:GetappointmentsComponent},
    {path:'doctors',component:DisplayDoctorsComponent},

    {path:'takeappointment',component:TakeappointmentComponent}
  ]},
  {path:'patient',component:AdminDashboardComponent,
  children:[
    {path:'getdoctors',component:GetdoctorsComponent}
  ]},

  {path:'doctors',component:DisplayDoctorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
