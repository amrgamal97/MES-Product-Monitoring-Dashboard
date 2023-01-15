import { Component, OnInit } from '@angular/core';
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

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Aluminum',
    weight: 1000,
    lastChange: '-100',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 2,
    name: 'Sulphat',
    weight: 1000,
    lastChange: '+100',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 3,
    name: 'Cardon',
    weight: 1000,
    lastChange: '+200',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 4,
    name: 'Material Name',
    weight: 1000,
    lastChange: '+200',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 5,
    name: 'Material Name',
    weight: 1000,
    lastChange: '+200',
    lastTime: '9:00 | 3-29-2021',
  },
  {
    position: 6,
    name: 'Material Name',
    weight: 1000,
    lastChange: '+200',
    lastTime: '9:00 | 3-29-2021',
  },
];
@Component({
  selector: 'app-material-list',
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
export class MaterialListComponent implements OnInit {
  ball1: string = 'background-color: #ca4e82';
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['position', 'name', 'weight', 'lastChange', 'lastTime'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor() {}

  ngOnInit(): void {}
}
