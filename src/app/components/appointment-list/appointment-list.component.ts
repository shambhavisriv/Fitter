import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { AppointmentService } from '../../services/appointment.service'; 
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  editAppointment(client: Client, appointment: Appointment) {
      console.log('Editing appointment:', appointment);
  }

  deleteAppointment(client: Client, appointmentId: number) {
   
    const confirmDelete = confirm('Are you sure you want to delete this appointment?');
    if (confirmDelete) {
      this.appointmentService.deleteAppointment(appointmentId);
    }
  }
}
