import { Appointment } from "./appointment";

export class AppointmentType {
  appointmentTypeId: Number = 0;
  name!: string;
  appointment: Appointment[]=[];
}
