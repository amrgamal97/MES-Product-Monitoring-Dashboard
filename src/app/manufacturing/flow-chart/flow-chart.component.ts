import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.scss'],
})
export class FlowChartComponent implements OnInit {
  table1Tr(n: number) {
    return Array(n);
  }
  constructor() {}

  ngOnInit(): void {}
}
