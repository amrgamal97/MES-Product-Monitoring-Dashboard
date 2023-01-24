import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Orders, Routes } from '../model';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  lastChange: string;
  lastTime: string;
}

const ELEMENT_DATA: PeriodicElement[] = Array(10).fill({
  position: 1,
  name: 'Machine Name',
  weight: 8241,
  lastChange: '19.39 | 03-04-2012',
  lastTime: '19.39 | 03-04-2012',
});
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class HistoryComponent implements OnInit {
  orders: Orders[] = [
    { value: 'order-0', viewValue: 'Job Order 1' },
    { value: 'order-1', viewValue: 'Job Order 2' },
    { value: 'order-2', viewValue: 'Job Order 3' },
  ];
  routes: Routes[] = [
    { value: 'route-0', viewValue: 'Route 1' },
    { value: 'route-1', viewValue: 'Route 2' },
    { value: 'route-2', viewValue: 'Route 3' },
  ];
  dataSource = ELEMENT_DATA;
  fontStyleControl = new FormControl('kpis');
  fontStyle?: string;
  selectedValue: number = 0;
  items(n: number) {
    return Array(n);
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }
  ball1: string = 'background-color: #ca4e82';
  columnsToDisplay = ['position', 'name', 'weight', 'lastChange', 'lastTime'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor() {}

  ngOnInit(): void {}
}
