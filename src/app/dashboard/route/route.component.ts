import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

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
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
})
export class RouteComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        // George Washington
        {
          name: 'Drawing',
          data: [
            {
              x: 'Route 5',
              y: [
                new Date(1789, 3, 30).getTime(),
                new Date(1797, 2, 4).getTime(),
              ],
            },
            {
              x: 'Route 1',
              y: [
                new Date(1805, 3, 30).getTime(),
                new Date(1816, 2, 4).getTime(),
              ],
            },
          ],
        },
        // John Adams
        {
          name: 'Assembly',
          data: [
            {
              x: 'Route 5',
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime(),
              ],
            },
            {
              x: 'Route 4',
              y: [
                new Date(1805, 3, 21).getTime(),
                new Date(1810, 2, 4).getTime(),
              ],
            },
          ],
        },
        // George Clinton
        {
          name: 'Drawing',
          data: [
            {
              x: 'Route 4',
              y: [
                new Date(1805, 2, 4).getTime(),
                new Date(1817, 3, 20).getTime(),
              ],
            },
          ],
        },
        // John Jay
        {
          name: 'AssemblyII',
          data: [
            {
              x: 'Route 3',
              y: [
                new Date(1812, 5, 5).getTime(),
                new Date(1796, 0, 2).getTime(),
              ],
            },
            {
              x: 'Route 2',
              y: [
                new Date(1789, 4, 13).getTime(),
                new Date(1805, 4, 12).getTime(),
              ],
            },
          ],
        },
        {
          name: 'Assembly',
          data: [
            {
              x: 'Route 2',
              y: [
                new Date(1796, 0, 2).getTime(),
                new Date(1805, 4, 12).getTime(),
              ],
            },
            {
              x: 'Route 4',
              y: [
                new Date(1800, 0, 2).getTime(),
                new Date(1805, 2, 4).getTime(),
              ],
            },
          ],
        },
        {
          name: 'Extrusion',
          data: [
            {
              x: 'Route 1',
              y: [
                new Date(1800, 4, 13).getTime(),
                new Date(1812, 5, 5).getTime(),
              ],
            },
            {
              x: 'Route 3',
              y: [
                new Date(1802, 4, 13).getTime(),
                new Date(1812, 5, 5).getTime(),
              ],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'rangeBar',
        fontFamily: 'Montserrat, sans-serif',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 2000,
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
        colors: [
          '#994F90',
          '#00E396',
          '#FEB019',
          '#FF4560',
          '#775DD0',
          '#00E396',
        ],
      },
      xaxis: {
        type: 'datetime',
      },
      legend: {
        position: 'bottom',
        fontSize: '12',
        fontFamily: 'Montserrat, sans-serif',
      },
    };
  }
  ngOnInit(): void {
    console.log(this.chartOptions.series?.length);
  }
}
