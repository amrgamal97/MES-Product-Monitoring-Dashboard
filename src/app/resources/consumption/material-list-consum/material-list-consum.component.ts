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

const ELEMENT_DATA: PeriodicElement[] = Array(7).fill({
  position: 512412,
  name: 'Aluminum',
  weight: 1000,
  lastChange: 'Armoring',
  lastTime: '48210',
  orderID: 55122,
  date: '9:00 | 3-29-2021',
});
@Component({
  selector: 'app-material-list-consum',
  templateUrl: './material-list-consum.component.html',
  styleUrls: ['./material-list-consum.component.scss'],
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
export class MaterialListConsumComponent implements OnInit {
  ball1: string = 'background-color: #ca4e82';
  dataSource = ELEMENT_DATA;
  columnsToDisplay = [
    'position',
    'name',
    'weight',
    'lastChange',
    'lastTime',
    'orderID',
    'date',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor() {}

  ngOnInit(): void {}
}
