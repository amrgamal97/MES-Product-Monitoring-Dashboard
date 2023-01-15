import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit {
  form: FormGroup;
  item: FormControl;
  supp: FormControl;
  matName: FormControl;
  matType: FormControl;

  initial() {
    this.item = new FormControl('', Validators.required);
    this.supp = new FormControl('', Validators.required);
    this.matName = new FormControl('', Validators.required);
    this.matType = new FormControl('');
  }

  createForm() {
    this.form = new FormGroup({
      item: this.item,
      supp: this.supp,
      matName: this.matName,
      matType: this.matType,
    });
  }

  constructor(
    private dialog: MatDialog,
    private toast: ToastrService,
    private spin: NgxSpinnerService
  ) {
    this.initial();
    this.createForm();
  }
  encapsulation: ViewEncapsulation.None;
  bg = '#2D62ED';
  ngOnInit(): void {}
  close() {
    this.dialog.closeAll();
  }
  out() {
    this.dialog.closeAll();
  }
  addNew() {
    this.spin.show();
    setTimeout(() => {
      this.spin.hide();
      this.toast.success('Success!', 'Your Item Will Be Added Soon..');
      this.dialog.closeAll();
    }, 2000);
  }
  addNew2() {
    this.spin.show();
    setTimeout(() => {
      this.spin.hide();
      this.toast.success('Success!', 'Your Product Will Be Added Soon..');
      this.dialog.closeAll();
    }, 2000);
  }
}
