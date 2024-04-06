import { Nurse } from "./nurse";
import { Room } from "./room";

export class Ward {
  wardId!: Number;
  name!: string;

  nurses: Nurse[] = [];
  rooms: Room[] = [];
}
