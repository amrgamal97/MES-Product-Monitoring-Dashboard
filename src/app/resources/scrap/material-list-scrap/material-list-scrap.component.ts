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
  weight: string;
  lastChange: string;
  lastTime: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Product Name',
    weight: 'newely supplied',
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 2,
    name: 'Product Name',
    weight: 'post process',
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 3,
    name: 'Product Name',
    weight: 'scale',
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 4,
    name: 'Product Name',
    weight: 'post process',
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 5,
    name: 'Product Name',
    weight: 'newely supplied',
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 6,
    name: 'Product Name',
    weight: 'post process',
    lastChange: 'Aluminum',
    lastTime: '9:00 | 3-29-2021',
  },
];
@Component({
  selector: 'app-material-list-scrap',
  templateUrl: './material-list-scrap.component.html',
  styleUrls: ['./material-list-scrap.component.scss'],
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
export class MaterialListScrapComponent implements OnInit {
  ball1: string = 'background-color: #ca4e82';
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['position', 'name', 'weight', 'lastChange', 'lastTime'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor() {}

  ngOnInit(): void {}
}
