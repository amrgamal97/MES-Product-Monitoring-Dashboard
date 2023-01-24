import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexLegend,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-process-chart',
  templateUrl: './process-chart.component.html',
  styleUrls: ['./process-chart.component.scss'],
})
export class ProcessChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Process 1',
          data: [
            {
              x: 'Process 5',
              y: [
                new Date(1789, 3, 30).getTime(),
                new Date(1797, 2, 4).getTime(),
              ],
            },
            {
              x: 'Process 1',
              y: [
                new Date(1805, 3, 30).getTime(),
                new Date(1816, 2, 4).getTime(),
              ],
            },
          ],
        },
        {
          name: 'Assembly',
          data: [
            {
              x: 'Process 5',
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime(),
              ],
            },
            {
              x: 'Process 4',
              y: [
                new Date(1805, 3, 21).getTime(),
                new Date(1810, 2, 4).getTime(),
              ],
            },
          ],
        },
        {
          name: 'Drawing',
          data: [
            {
              x: 'Process 4',
              y: [
                new Date(1805, 2, 4).getTime(),
                new Date(1817, 3, 20).getTime(),
              ],
            },
          ],
        },
        {
          name: 'AssemblyII',
          data: [
            {
              x: 'Process 3',
              y: [
                new Date(1812, 5, 5).getTime(),
                new Date(1796, 0, 2).getTime(),
              ],
            },
            {
              x: 'Process 2',
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
              x: 'Process 2',
              y: [
                new Date(1796, 0, 2).getTime(),
                new Date(1805, 4, 12).getTime(),
              ],
            },
            {
              x: 'Process 4',
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
              x: 'Process 1',
              y: [
                new Date(1800, 4, 13).getTime(),
                new Date(1812, 5, 5).getTime(),
              ],
            },
            {
              x: 'Process 3',
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
        show: false,
      },
    };
  }

  ngOnInit(): void {}
}
