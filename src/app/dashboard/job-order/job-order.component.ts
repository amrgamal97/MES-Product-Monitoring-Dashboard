import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-job-order',
  templateUrl: './job-order.component.html',
  styleUrls: ['./job-order.component.scss'],
})
export class JobOrderComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Job 1',
          data: [
            {
              x: 'Job 1',
              y: [
                new Date(1789, 3, 30).getTime(),
                new Date(1797, 2, 4).getTime(),
              ],
            },
          ],
        },
        {
          name: 'Job 2',
          data: [
            {
              x: 'Job 2',
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime(),
              ],
            },
          ],
        },
        {
          name: 'Job 3',
          data: [
            {
              x: 'Job 3',
              y: [
                new Date(1805, 2, 4).getTime(),
                new Date(1817, 3, 20).getTime(),
              ],
            },
          ],
        },
        {
          name: 'Job 4',
          data: [
            {
              x: 'Job 4',
              y: [
                new Date(1796, 0, 2).getTime(),
                new Date(1805, 4, 12).getTime(),
              ],
            },
          ],
        },
        {
          name: 'Job 5',
          data: [
            {
              x: 'Job 5',
              y: [
                new Date(1800, 4, 13).getTime(),
                new Date(1812, 5, 5).getTime(),
              ],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'rangeBar',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1300,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '20%',
          rangeBarGroupRows: true,
        },
      },
      fill: {
        type: 'solid',
        colors: ['#003F5C'],
      },

      xaxis: {
        type: 'datetime',
      },
      legend: {
        show: false,
      },
    };
  }
  ngOnInit(): void {}
}
