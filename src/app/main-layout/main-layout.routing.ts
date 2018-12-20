import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HireEmployeeComponent } from '../hire-employee/hire-employee.component';
import { TimesheetComponent } from '../timesheet/timesheet.component';
import { AuthGuard } from 'src/app/auth.guard';
import { EmployeeListComponent } from 'src/app/employee-list/employee-list.component';

export const MainLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'hireEmployee', component: HireEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'timeSheet', component: TimesheetComponent, canActivate: [AuthGuard]},
    { path: 'viewEmployees', component: EmployeeListComponent, canActivate: [AuthGuard]}

];
