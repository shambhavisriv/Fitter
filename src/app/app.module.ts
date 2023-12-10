import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientManagementComponent } from './components/client-management/client-management.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    AppointmentFormComponent,
    CalendarComponent,
    ClientManagementComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
