import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ClientManagementComponent } from './components/client-management/client-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-appointment-list', pathMatch: 'full' },
  { path: 'app-client-management', component: ClientManagementComponent },
  { path: 'app-appointment-list', component: AppointmentListComponent },
  { path: 'app-appointment-form', component: AppointmentFormComponent },
  { path: 'app-calendar', component: CalendarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
