import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewComponent } from './add-new/add-new.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  selected: number = 0;
  constructor(private route: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}
  addData() {
    this.dialog.open(AddNewComponent, {
      height: '450px',
      width: '600px',
    });
  }
}
