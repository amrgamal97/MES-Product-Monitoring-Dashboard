import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-downtime-chart',
  templateUrl: './downtime-chart.component.html',
  styleUrls: ['./downtime-chart.component.scss'],
})
export class DowntimeChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Technical Issue',
          data: [44, 55, 41, 67, 22, 43],
          color: '#2C3E50',
        },
        {
          name: 'Human Error',
          data: [13, 23, 20, 8, 13, 27],
          color: '#205068',
        },
        {
          name: 'Power Off',
          data: [11, 17, 15, 15, 21, 14],
          color: '#4C788D',
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: 'category',
        categories: [
          'Machine Name',
          'Machine Name',
          'Machine Name',
          'Machine Name',
          'Machine Name',
          'Machine Name',
        ],
      },
      legend: {
        // show: false,
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
        colors: ['#205068', '#2C3E50', '#4C788D'],
      },
    };
  }

  ngOnInit(): void {}
}
