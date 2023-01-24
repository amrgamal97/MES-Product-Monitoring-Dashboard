import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
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

const ELEMENT_DATA: PeriodicElement[] = Array(8).fill({
  position: 512412,
  name: 'Function Name',
  weight: 1000,
  lastChange: 'Armoring',
  lastTime: '48210',
  orderID: 55122,
  date: '9:00 | 3-29-2021',
});
@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss'],
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
export class ProcessListComponent implements OnInit {
  ball1: string = 'background-color: #ca4e82';
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['position', 'name', 'weight', 'lastChange', 'orderID'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor() {}

  ngOnInit(): void {}
}
