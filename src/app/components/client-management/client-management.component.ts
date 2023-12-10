import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementComponent implements OnInit {
  clientForm: FormGroup = this.formBuilder.group({
    id: [0],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    location: [''],
  });

  clients: Client[] = [];

  constructor(private formBuilder: FormBuilder, private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  submitForm() {
    if (this.clientForm.valid) {
      const client: Client = this.clientForm.value;

      if (client.id === 0) {
       
        this.clientService.addClient(client);
      } else {
        
        this.clientService.editClient(client);
      }

      this.resetForm();
    }
  }

  editClient(selectedClient: Client) {
    this.clientForm.setValue(selectedClient);
  }

  deleteClient(clientId: number) {
    this.clientService.deleteClient(clientId);
  }

  private resetForm() {
    this.clientForm.reset({ id: 0 });
  }
}
