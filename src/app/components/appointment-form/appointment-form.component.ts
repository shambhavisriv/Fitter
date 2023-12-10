import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { AppointmentService } from '../../services/appointment.service';
import { Client } from '../../models/client.model';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm: FormGroup = this.formBuilder.group({
    clientId: ['', Validators.required],
    dateTime: ['', Validators.required],
  });
  clients: Client[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
         });
  }

  submitForm() {
    if (this.appointmentForm.valid) {
      const clientId = this.appointmentForm.value.clientId;
      const dateTime = this.appointmentForm.value.dateTime;
     

      const appointment: Appointment = {
        id: new Date().getTime(),
        dateTime: new Date(dateTime),
        
        
      };

      this.appointmentService.addAppointment(appointment);
      this.appointmentForm.reset();
    }
  }
}
