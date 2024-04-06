import { Ward } from "./ward";

export class Nurse {
  nurseId!: Number;
  name!: string;
  contactNo!: string;
  shift!: string;

  wardId!: Number;
  ward!: Ward;
}
