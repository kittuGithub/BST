import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutRoutes } from './main-layout.routing';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HireEmployeeComponent } from '../hire-employee/hire-employee.component';
import { TimesheetComponent } from '../timesheet/timesheet.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

import { DataService } from './data-service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import 'flatpickr/dist/flatpickr.css';
import { FlatpickrModule } from 'angularx-flatpickr';
import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  } from '@angular/material';

  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(MainLayoutRoutes),
      FormsModule,
      FlatpickrModule.forRoot(),
      MatButtonModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      MatDatepickerModule,
      MatNativeDateModule,
      ReactiveFormsModule,
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
      })
    ],
    declarations: [
      DashboardComponent,
      HireEmployeeComponent,
      TimesheetComponent,
      EmployeeListComponent
    ],
    providers: [
      DataService
    ]
  })

  export class MainLayoutModule {}
