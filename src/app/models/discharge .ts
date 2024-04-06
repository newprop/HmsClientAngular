import { Admission } from "./admission";
import { Patient } from "./patient";

export class Discharge {
  dischargeId!: number;
  patientID!: number;
  admissionID!: number;
  dischargeDate!: Date;
  reason?: string;
  dischargeInstructions?: string;
  admission!: Admission;
  patient!: Patient;
}
