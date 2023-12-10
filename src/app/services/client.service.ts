import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients: Client[] = [];
  private clientsSubject = new BehaviorSubject<Client[]>([]);

  getClients(): Observable<Client[]> {
    return this.clientsSubject.asObservable();
  }

  addClient(client: Client) {
    this.clients.push(client);
    this.clientsSubject.next([...this.clients]);
  }

  editClient(updatedClient: Client) {
    const index = this.clients.findIndex((c) => c.id === updatedClient.id);
    if (index !== -1) {
      this.clients[index] = updatedClient;
      this.clientsSubject.next([...this.clients]);
    }
  }

  deleteClient(clientId: number) {
    const index = this.clients.findIndex((c) => c.id === clientId);
    if (index !== -1) {
      this.clients.splice(index, 1);
      this.clientsSubject.next([...this.clients]);
    }
  }
}
