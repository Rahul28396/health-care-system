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

export const APPOINTMENTS: Array<Appointment> = new Array<Appointment>(18).fill({
    id: Math.floor(Math.random()*90000) + 10000,
    patientId: Math.floor(Math.random()*90000) + 10000,
    patientName: "Salman Khan",
    email: "sk@gmail.com",
    phone: 1234567890,
    address: {
        city: 'Hooghly',
        state: 'West Bengal',
        country: 'India',
        pincode: '712602'
    },
    deptName: 'Ortho',
    doctorName: 'Dr. Asthi Kar',
    symptoms: [
        'Injury in the right knee',
        'Pain in the Right knee'
    ]
})