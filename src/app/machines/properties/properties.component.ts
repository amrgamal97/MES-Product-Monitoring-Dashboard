import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  fontStyleControl = new FormControl('kpis');
  fontStyle?: string;
  items(n: number) {
    return Array(n);
  }
  constructor(
    private dialog: MatDialog,
    private toast: ToastrService,
    private spin: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.dialog.closeAll();
  }
  update() {
    this.spin.show();
    setTimeout(() => {
      this.spin.hide();
      this.toast.success('Changes Updated Successfully!', 'Woohoo!');
      this.dialog.closeAll();
    }, 2000);
  }
}
