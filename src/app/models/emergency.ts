import { Department } from "./department";
import { Doctor } from "./doctor";
import { EmergencyPrescribe } from "./emergency-prescribe";
import { Patient } from "./patient";

export class Emergency {
  emergencyId!: Number;
  patientID!: Number;
  doctorID!: Number;
  departmentID!: Number;
  location?: string;
  emergencyDateTime: Date = new Date();
  description?: string;
  severity?: string;

  patient!: Patient;
  doctor!: Doctor;
  department!: Department;
  prescribe!: EmergencyPrescribe;
}
