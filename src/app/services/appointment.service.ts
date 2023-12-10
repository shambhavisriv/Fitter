// services/appointment.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: Appointment[] = [];
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);

  getAppointments(): Observable<Appointment[]> {
    return this.appointmentsSubject.asObservable().pipe(
      filter(appointments => appointments!== null)
    );
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    this.appointmentsSubject.next([...this.appointments]);
  }

  editAppointment(updatedAppointment: Appointment) {
    const index = this.appointments.findIndex((app) => app.id === updatedAppointment.id);
    if (index !== -1) {
      this.appointments[index] = updatedAppointment;
      this.appointmentsSubject.next([...this.appointments]);
    }
  }

  deleteAppointment(appointmentId: number) {
    const index = this.appointments.findIndex((app) => app.id === appointmentId);
    if (index !== -1) {
      this.appointments.splice(index, 1);
      this.appointmentsSubject.next([...this.appointments]);
    }
  } 

  hasAppointments(): boolean{
    return this.appointments.length > 0;
  }
}

