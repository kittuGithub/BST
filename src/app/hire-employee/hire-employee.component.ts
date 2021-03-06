import { Component, OnInit, ViewChild, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { DataService } from '../main-layout/data-service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-hire-employee',
  templateUrl: './hire-employee.component.html',
  styleUrls: ['./hire-employee.component.scss']
})
export class HireEmployeeComponent implements OnInit {
  @Output() heFormEmitter: EventEmitter<any> = new EventEmitter<any>();
  hireForm = null;
  constructor(private fb: FormBuilder, private ds: DataService, public dialog: MatDialog) {
    const emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    this.hireForm = this.fb.group({
      he_fn : [''],
      he_mn : [''],
      he_ln : [''],
      he_ge : [''],
      he_email : ['', [Validators.required, Validators.pattern(emailRegEx)]],
      phonenumbers : this.fb.group({
        he_hph : ['', [Validators.pattern('[0-9]{0-10}')]],
        he_cph : ['', [Validators.pattern('[0-9]{0-10}')]]
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
    /*this.ds.currentMessage.subscribe(message => {
    //  console.log('hireEmployee' + message);
    });*/
  }
  hireEmployee() {
   // console.log('hireEmployee');
   // console.log(this.hireForm.value);
   // this.heFormEmitter.emit(this.hireForm.value);
    this.ds.changeMessage(this.hireForm.value);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {description: 'Successfully Hired the exmployee'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.resetForm();
    });
  }
  resetForm() {
   // console.log('Reset Form');
    this.hireForm.reset();
  }
}

export interface DialogData {
  description: string;
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
