import { AppointmentPrescribe } from "./appointment-prescribe";
import { AppointmentType } from "./appointment-type";
import { Department } from "./department";
import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {
  appointmentId!: Number;
  patientID!: Number;
  doctorID!: Number;
  departmentID!: Number;
  appointmentDate: Date = new Date();
  appointmentTypeID!: Number;
  description!: string;
  severity!: string;


  appointmentType!: AppointmentType;
  patient!: Patient;
  doctor!: Doctor;
  department!: Department;
  prescribe!: AppointmentPrescribe;
}
