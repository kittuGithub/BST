import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HireEmployeeComponent } from '../hire-employee/hire-employee.component';

export const MainLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'hireEmployee', component: HireEmployeeComponent }
];
