import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../auth/services.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  constructor(private service: ServicesService) {}

  ngOnInit(): void {}
  logOut() {
    this.service.signOut();
  }
}
