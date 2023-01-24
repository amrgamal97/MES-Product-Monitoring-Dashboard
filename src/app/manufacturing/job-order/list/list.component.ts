import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  date: string;
  state: any;
  client: string;
  sales: string;
  product: string;
  routeId: string;
  icons: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 938840,
    date: '02-02-3000',
    state: '',
    client: 'Mohamed',
    sales: 'Ahmed',
    product: '30 Material',
    routeId: '51274',
    icons: '',
  },
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
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
export class ListComponent implements OnInit {
  table1Tr(n: number) {
    return Array(n);
  }
  dataSource = ELEMENT_DATA;
  columnsToDisplay = [
    'position',
    'date',
    'state',
    'client',
    'sales',
    'product',
    'routerId',
    'icons',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  table1: boolean = false;
  table2: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showing() {
    this.table2 = false;
    this.table1 = true;
    console.log(this.table1);
  }
  showing2() {
    this.table1 = false;
    this.table2 = true;
  }
  showing3() {
    this.table2 = false;
    this.table1 = true;
  }
}
