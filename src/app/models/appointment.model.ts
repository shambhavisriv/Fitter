export interface Appointment {
    id: number;
    dateTime: Date;
  }
  export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    location: string;
    appointments: Appointment[];
  }