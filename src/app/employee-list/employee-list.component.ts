import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { DataService } from '../main-layout/data-service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnChanges {
  employeeList = [];
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.currentMessage.subscribe((message) => {
      console.log('currentMessgae : ', message);
      this.employeeList.push(message);
      console.log(this.employeeList);
    });
  }
  ngOnChanges() {
  }

}
