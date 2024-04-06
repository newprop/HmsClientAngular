import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patients/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patients/patient-create/patient-create.component';
import { PatientEditComponent } from './components/patients/patient-edit/patient-edit.component';
import { PatientDetailsComponent } from './components/patients/patient-details/patient-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmergencyListComponent } from './components/emergency/emergency-list/emergency-list.component';
import { EmergencyCreateComponent } from './components/emergency/emergency-create/emergency-create.component';
import { EmergencyEditComponent } from './components/emergency/emergency-edit/emergency-edit.component';
import { AppointmentListComponent } from './components/appointments/appointment-list/appointment-list.component';
import { AppointmentCreateComponent } from './components/appointments/appointment-create/appointment-create.component';
import { AppointmentEditComponent } from './components/appointments/appointment-edit/appointment-edit.component';
import { DepartmentListComponent } from './components/departments/department-list/department-list.component';
import { DepartmentCreateComponent } from './components/departments/department-create/department-create.component';
import { DepartmentEditComponent } from './components/departments/department-edit/department-edit.component';
import { DepartmentDetailsComponent } from './components/departments/department-details/department-details.component';
import { WardListComponent } from './components/wards/ward-list/ward-list.component';
import { WardCreateComponent } from './components/wards/ward-create/ward-create.component';
import { WardEditComponent } from './components/wards/ward-edit/ward-edit.component';
import { WardDetailsComponent } from './components/wards/ward-details/ward-details.component';
import { StaffListComponent } from './components/staff/staff-list/staff-list.component';
import { StaffCreateComponent } from './components/staff/staff-create/staff-create.component';
import { StaffEditComponent } from './components/staff/staff-edit/staff-edit.component';
import { StaffDetailsComponent } from './components/staff/staff-details/StaffDetailsComponent';
import { DischargeListComponent } from './components/discharge/discharge-list/discharge-list.component';
import { DischargeCreateComponent } from './components/discharge/discharge-create/discharge-create.component';
import { DischargeEditComponent } from './components/discharge/discharge-edit/discharge-edit.component';
import { DischargeDetailsComponent } from './components/discharge/discharge-details/discharge-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientCreateComponent,
    PatientEditComponent,
    PatientDetailsComponent,
    EmergencyListComponent,
    EmergencyCreateComponent,
    EmergencyEditComponent,
    AppointmentListComponent,
    AppointmentCreateComponent,
    AppointmentEditComponent,
    DepartmentListComponent,
    DepartmentCreateComponent,
    DepartmentEditComponent,
    DepartmentDetailsComponent,
    WardListComponent,
    WardCreateComponent,
    WardEditComponent,
    WardDetailsComponent,
    StaffListComponent,
    StaffCreateComponent,
    StaffEditComponent,
    StaffDetailsComponent,
    DischargeListComponent,
    DischargeCreateComponent,
    DischargeEditComponent,
    DischargeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
