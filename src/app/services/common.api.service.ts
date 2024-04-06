import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodType } from '../models/blood-type';
import { AppointmentType } from '../models/appointment-type';
import { Patient } from '../models/patient';
import { Department } from '../models/department';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(private http: HttpClient) { }
  apiUrl: string = "https://localhost:7055/api/Common";


  public GetShiftTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl +"/GetShiftType");
  }

  public GetGenders(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl +"/GetGender");
  }

  public GetBloodTypes(): Observable<BloodType[]> {
    return this.http.get<BloodType[]>(this.apiUrl + "/GetBloodType");
  }

  public GetAppointmentType(): Observable<AppointmentType[]> {
    return this.http.get<AppointmentType[]>(this.apiUrl + "/GetAppointmentType");
  }

  public GetPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl + "/GetPatient");
  }

  public GetDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl + "/GetDepartment");
  }

  public GetDoctor(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl + "/GetDoctor");
  }



}
