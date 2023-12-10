// models/client.model.ts
import { Appointment } from './appointment.model';

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  location: string;
  appointments: Appointment[];
}
