import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { DataService } from '../main-layout/data-service';

@Component({
  selector: 'app-hire-employee',
  templateUrl: './hire-employee.component.html',
  styleUrls: ['./hire-employee.component.scss']
})
export class HireEmployeeComponent implements OnInit {
  @Output() heFormEmitter: EventEmitter<any> = new EventEmitter<any>();
  hireForm = null;
  constructor(private fb: FormBuilder, private ds: DataService) {
    this.hireForm = this.fb.group({
      he_fn : [''],
      he_mn : [''],
      he_ln : [''],
      he_ge : [''],
      he_email : [''],
      phonenumbers : this.fb.group({
        he_hph : [''],
        he_cph : ['']
      }),
      address : this.fb.group({
        he_sadd : [''],
        he_apt : [''],
        he_city : [''],
        he_pcode : ['']
      }),
      he_dob : [''],
      he_mstat : [''],
      he_gid : [''],
      education : this.fb.group({
        he_pgs : [''],
        he_pgp : [''],
        he_gs : [''],
        he_gp : [''],
        he_is : [''],
        he_ip : [''],
        he_ss : [''],
        he_sp : ['']
      }),
      he_ks : [''],
      he_exp : [''],
      he_upload : ['']
    });
  }

  ngOnInit() {
    this.ds.currentMessage.subscribe(message => {
    //  console.log('hireEmployee' + message);
    });
  }
  hireEmployee() {
   // console.log('hireEmployee');
   // console.log(this.hireForm.value);
   // this.heFormEmitter.emit(this.hireForm.value);
    this.ds.changeMessage(this.hireForm.value);
  }
  resetForm() {
   // console.log('Reset Form');
    this.hireForm.reset();
  }
}
