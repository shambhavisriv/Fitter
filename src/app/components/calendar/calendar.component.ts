import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment, Client } from 'src/app/models/appointment.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  appointments: Appointment[] = [];
  clients: Client[] = [];
  eventData: EventSettingsModel = {};

  constructor(private appointmentService: AppointmentService,private clientService: ClientService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(
      (appointments: Appointment[]) => {
        this.appointments = appointments || [];
        this.updateEventData();
        console.log("update eventData:", this.updateEventData());
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
    
  }

  

  updateEventData(): void {
    const formattedAppointments = this.appointments.map(appointment => {
      return {
        Id: appointment.id, 
        Subject: 'Appointment',
        StartTime: new Date(appointment.dateTime),
        EndTime: new Date(appointment.dateTime), 
       
      };
    });

    this.eventData = { dataSource: formattedAppointments };
  }
  
  
}
