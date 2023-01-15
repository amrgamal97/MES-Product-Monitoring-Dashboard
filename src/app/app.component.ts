import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, DoCheck, ViewChild, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
// import { animatingRouts } from './animating-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [animatingRouts],
})
export class AppComponent implements OnInit, DoCheck {
  navControl: boolean = false;
  // sideNavStatus: boolean = false;
  sideBarOpen: boolean = false;
  constructor(private router: Router, private obs: BreakpointObserver) {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    const currentR = this.router.url;
    if (currentR == '/login') {
      this.navControl = false;
    } else if (currentR == '/register') {
      this.navControl = false;
    } else if (currentR == '/') {
      this.navControl = false;
    } else {
      this.navControl = true;
    }
  }
  sidebar() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
