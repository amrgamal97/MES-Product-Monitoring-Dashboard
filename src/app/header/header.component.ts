import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sideButtonToggle = new EventEmitter<boolean>();
  menu: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  // sideToggle() {
  //   this.menu = !this.menu;
  //   this.sideButtonToggle.emit(this.menu);
  //   console.log(this.menu);
  // }
  toggleSide() {
    this.sideButtonToggle.emit();
  }
}
