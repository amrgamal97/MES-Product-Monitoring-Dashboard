import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../../manufacturing.component';

@Component({
  selector: 'app-route-chart',
  templateUrl: './route-chart.component.html',
  styleUrls: ['./route-chart.component.scss'],
})
export class RouteChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'basic',
          data: [400, 430, 448, 470, 540, 580, 690],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Route 1',
          'Route 2',
          'Route 3',
          'Route 4',
          'Route 5',
          'Route 6',
          'Route 7',
        ],
      },
    };
  }

  ngOnInit(): void {}
}
