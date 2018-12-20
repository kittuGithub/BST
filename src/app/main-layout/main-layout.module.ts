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

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  } from '@angular/material';

  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(MainLayoutRoutes),
      FormsModule,
      MatButtonModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      ReactiveFormsModule
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
