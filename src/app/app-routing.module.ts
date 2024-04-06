import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patients/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patients/patient-create/patient-create.component';
import { PatientEditComponent } from './components/patients/patient-edit/patient-edit.component';
import { PatientDetailsComponent } from './components/patients/patient-details/patient-details.component';
import { EmergencyListComponent } from './components/emergency/emergency-list/emergency-list.component';
import { EmergencyCreateComponent } from './components/emergency/emergency-create/emergency-create.component';
import { EmergencyEditComponent } from './components/emergency/emergency-edit/emergency-edit.component';
import { AppointmentListComponent } from './components/appointments/appointment-list/appointment-list.component';
import { AppointmentCreateComponent } from './components/appointments/appointment-create/appointment-create.component';
import { AppointmentEditComponent } from './components/appointments/appointment-edit/appointment-edit.component';
import { DepartmentListComponent } from './components/departments/department-list/department-list.component';
import { DepartmentCreateComponent } from './components/departments/department-create/department-create.component';
import { DepartmentDetailsComponent } from './components/departments/department-details/department-details.component';
import { DepartmentEditComponent } from './components/departments/department-edit/department-edit.component';
import { WardListComponent } from './components/wards/ward-list/ward-list.component';
import { WardCreateComponent } from './components/wards/ward-create/ward-create.component';
import { WardDetailsComponent } from './components/wards/ward-details/ward-details.component';
import { WardEditComponent } from './components/wards/ward-edit/ward-edit.component';
import { StaffListComponent } from './components/staff/staff-list/staff-list.component';
import { StaffCreateComponent } from './components/staff/staff-create/staff-create.component';
import { StaffEditComponent } from './components/staff/staff-edit/staff-edit.component';
import { StaffDetailsComponent } from './components/staff/staff-details/StaffDetailsComponent';
import { DischargeService } from './services/discharge .service';
import { DischargeListComponent } from './components/discharge/discharge-list/discharge-list.component';
import { DischargeDetailsComponent } from './components/discharge/discharge-details/discharge-details.component';
import { DischargeCreateComponent } from './components/discharge/discharge-create/discharge-create.component';
import { DischargeEditComponent } from './components/discharge/discharge-edit/discharge-edit.component';

const routes: Routes = [
  /*{ path: "", redirectTo: "/PatientList", pathMatch: "full" },*/
  { path: "PatientList", component: PatientListComponent },
  { path: "PatientCreate/create", component: PatientCreateComponent },
  { path: "PatientDetails/details/:id", component: PatientDetailsComponent },
  { path: "PatientEdit/edit/:id", component: PatientEditComponent },

  { path: "EmergencyList", component: EmergencyListComponent },
  { path: "EmergencyCreate/create", component: EmergencyCreateComponent },
  { path: "EmergencyEdit/edit/:id", component: EmergencyEditComponent },

  { path: "AppointmentList", component: AppointmentListComponent },
  { path: "AppointmentCreate/create", component: AppointmentCreateComponent },
  { path: "AppointmentEdit/edit/:id", component: AppointmentEditComponent },

  { path: "DepartmentList", component: DepartmentListComponent },
  { path: "DepartmentCreate/create", component: DepartmentCreateComponent },
  { path: "DepartmentDetails/details/:id", component: DepartmentDetailsComponent },
  { path: "DepartmentEdit/edit/:id", component: DepartmentEditComponent },

  { path: "WardList", component: WardListComponent },
  { path: "WardCreate/create", component: WardCreateComponent },
  { path: "WardDetails/details/:id", component: WardDetailsComponent },
  { path: "WardEdit/edit/:id", component: WardEditComponent },

  { path: "StaffList", component: StaffListComponent },
  { path: "Staffcreate/create", component: StaffCreateComponent },
  { path: "StaffDetails/details/:id", component: StaffDetailsComponent },
  { path: "StaffEdit/edit/:id", component: StaffEditComponent },

  { path: "DischargeList", component: DischargeListComponent },
  { path: "Dischargecreate/create", component: DischargeCreateComponent },
  { path: "DischargeDetails/details/:id", component: DischargeDetailsComponent },
  { path: "DischargeEdit/edit/:id", component: DischargeEditComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
