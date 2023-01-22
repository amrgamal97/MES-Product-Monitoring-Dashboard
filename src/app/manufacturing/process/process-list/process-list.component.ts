import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  lastChange: string;
  lastTime: string;
  orderID: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 512412,
    name: 'Function Name',
    weight: 1000,
    lastChange: 'Armoring',
    lastTime: '48210',
    orderID: 55122,
    date: '9:00 | 3-29-2021',
  },
  {
    position: 512412,
    name: 'Function Name',
    weight: 1000,
    lastChange: 'Armoring',
    lastTime: '48210',
    orderID: 55122,
    date: '9:00 | 3-29-2021',
  },
  {
    position: 512412,
    name: 'Function Name',
    weight: 1000,
    lastChange: 'Armoring',
    lastTime: '48210',
    orderID: 55122,
    date: '9:00 | 3-29-2021',
  },
  {
    position: 512412,
    name: 'Function Name',
    weight: 1000,
    lastChange: 'Armoring',
    lastTime: '48210',
    orderID: 55122,
    date: '9:00 | 3-29-2021',
  },
  {
    position: 512412,
    name: 'Function Name',
    weight: 1000,
    lastChange: 'Armoring',
    lastTime: '48210',
    orderID: 55122,
    date: '9:00 | 3-29-2021',
  },
  {
    position: 512412,
    name: 'Function Name',
    weight: 1000,
    lastChange: 'Armoring',
    lastTime: '48210',
    orderID: 55122,
    date: '9:00 | 3-29-2021',
  },
];
@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss'],
})
export class ProcessListComponent implements OnInit {
  ball1: string = 'background-color: #ca4e82';
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['position', 'name', 'weight', 'lastChange', 'orderID'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor() {}

  ngOnInit(): void {}
}
