import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  title: any;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'ASSEMBLY',
    name: 'Pourtier 2200/2 Low Voltage - Assembly',
    weight: 'Pourtier 2600/4 - Assembly - Medium Voltage',
    symbol: 'Assembly 2200 - Assembly/Wire Armoring',
  },
  {
    title: 'Assembly-Armoring',
    name: 'Cortinovis 2600 -Assembly/Wire Armoring',
    weight: '',
    symbol: '',
  },
  {
    title: 'Drawing',
    name: 'Pourtier 2200/2 Low Voltage - Assembly',
    weight: 'Assembly 2200 - Assembly/Wire Armoring',
    symbol: 'Kabmak - Armoring - Steel Tape',
  },
  {
    title: 'Extrusion',
    name: 'Pourtier 2200/2 Low Voltage - Assembly',
    weight: 'Assembly 2200 - Assembly/Wire Armoring',
    symbol: 'Kabmak - Armoring - Steel Tape',
  },
  {
    title: 'Insulation',
    name: 'Kabmak - Armoring - Steel Tape',
    weight: 'Lead/Steel Tape Armoring',
    symbol: 'Kabmak New - Armoring',
  },
  {
    title: 'Insulation-Extrusion',
    name: 'Pourtier 2200/2 Low Voltage - Assembly',
    weight: 'Pourtier 2600/4 - Assembly - Medium Voltage',
    symbol: 'Assembly 2200 - Assembly/Wire Armoring',
  },
  {
    title: 'Armoring',
    name: 'Kabmak - Armoring - Steel Tape',
    weight: 'Armoring D - Steel Tape',
    symbol: 'Lead/Steel Tape Armoring',
  },
  {
    title: 'Lead',
    name: 'Pourtier 2200/2 Low Voltage - Assembly',
    weight: 'Assembly 2200 - Assembly/Wire Armoring',
    symbol: 'Kabmak - Armoring - Steel Tape',
  },
  {
    title: 'Screening',
    name: 'Cortinovis 2600 -Assembly/Wire Armoring',
    weight: 'Cortinovis 2600 -Assembly/Wire',
    symbol: '',
  },
  {
    title: 'Stranding',
    name: 'Pourtier 2200/2 Low Voltage - Assembly',
    weight: 'Pourtier 2600/4 - Assembly - Medium Voltage',
    symbol: 'Assembly 2200 - Assembly/Wire Armoring',
  },
];

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
})
export class FunctionsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
