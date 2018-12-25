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
    console.log('Data : ' + this.ds.getData());
    this.employeeList = this.ds.getData();
  }

  ngOnChanges() {
  }

}
