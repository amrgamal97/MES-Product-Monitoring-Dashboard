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
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Supplier Name',
    weight: 1000,
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 2,
    name: 'Supplier Name',
    weight: 1000,
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 3,
    name: 'Supplier Name',
    weight: 1000,
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 4,
    name: 'Supplier Name',
    weight: 1000,
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 5,
    name: 'Supplier Name',
    weight: 1000,
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 6,
    name: 'Supplier Name',
    weight: 1000,
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
];
@Component({
  selector: 'app-material-list-supply',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss'],
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
export class MaterialListSupplyComponent implements OnInit {
  constructor() {}
  ball1: string = 'background-color: #ca4e82';
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['position', 'name', 'weight', 'lastChange', 'lastTime'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  ngOnInit(): void {}
}
