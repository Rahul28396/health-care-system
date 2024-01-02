import { Address } from "../address.model";

export class Appointment {
    id!: number;
    patientId!:number;
    patientName!: string;
    email!: string;
    phone!: number;
    address!: Address;
    deptName!: string;
    doctorName!: string;
    symptoms!: Array<string>;
}