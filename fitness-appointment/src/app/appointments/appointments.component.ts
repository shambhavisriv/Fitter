import { Component  } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  appointmentRows: any[] = [{
    firstName: '',
    lastName: '',
    location: '',
    isEditing: false
  }]; // Initial appointment row
appointment: any;
datetime: string | number | Date | undefined;

  addAppointmentRow() {
    this.appointmentRows.push({
      firstName: '',
      lastName: '',
      location: '',
      appointmentDateTime: '',
      isEditing: false
    });
  }

  addAppointment(index:number) {
    // Implement logic to add new appointment for the client at 'index'
    // Use this.appointmentRows[index].appointmentDateTime to get the selected date and time
    
  }

  editAppointment(index: number) {
    this.appointmentRows[index].isEditing = true; // Set editing flag to true
  }

  saveAppointment(index: number) {
    this.appointmentRows[index].isEditing = false; // Set editing flag to false after saving changes
    // Implement logic to save changes to backend or perform other actions
  }

  deleteAppointment(index: number) {
    // Implement confirmation step
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentRows.splice(index, 1);
      // Provide success message/notification
      console.log('Appointment deleted successfully!');
    }
  }
  getAppointmentDateTimes(appointment: any): string[] {
    return appointment.appointmentDateTimes || [];
  }

  // Function to delete a single appointment for a client
  deleteSingleAppointment(appointment: any, datetime: string) {
    const index = appointment.appointmentDateTimes.indexOf(datetime);
    if (index !== -1) {
      appointment.appointmentDateTimes.splice(index, 1);
      // Provide success message/notification
      console.log('Appointment deleted successfully!');
    }
  }

  // Function to delete all appointments for a client
  deleteAllAppointments(appointment: any) {
    appointment.appointmentDateTimes = [];
    // Provide success message/notification
    console.log('All appointments deleted successfully!');
}
}
