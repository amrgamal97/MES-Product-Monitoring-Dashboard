import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';

import {
  ApexChart,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexAxisChartSeries,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          type: 'boxPlot',
          data: [
            {
              x: 'Job 1',
              y: [54, 66, 69, 75, 88],
            },
            {
              x: 'Job 2',
              y: [43, 65, 69, 76, 81],
            },
            {
              x: 'Job 3',
              y: [31, 39, 45, 51, 59],
            },
            {
              x: 'Job 4',
              y: [39, 46, 55, 65, 71],
            },
            {
              x: 'Job 5',
              y: [29, 31, 35, 39, 44],
            },
            {
              x: 'Job 6',
              y: [41, 49, 58, 61, 67],
            },
            {
              x: 'Job 7',
              y: [54, 59, 66, 71, 88],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'boxPlot',
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

      title: {
        text: 'Job Orders Chart',
        align: 'left',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%',
        },
        boxPlot: {
          colors: {
            upper: '#e9ecef',
            lower: '#f8f9fa',
          },
        },
      },
    };
  }
  ngOnInit(): void {}
}
