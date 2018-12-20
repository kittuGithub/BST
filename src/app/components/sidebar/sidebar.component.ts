import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/hireEmployee', title: 'Hire Employee',  icon: 'person', class: '' },
    { path: '/timeSheet', title: 'Timesheet',  icon: 'timer', class: '' },
    { path: '/immigration', title: 'Immigration',  icon: 'work', class: '' },
    { path: '/viewEmployees', title: 'Employess List',  icon: 'group', class: '' },
    { path: '/payments', title: 'Payments',  icon: 'payment', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['']);
  }
}
