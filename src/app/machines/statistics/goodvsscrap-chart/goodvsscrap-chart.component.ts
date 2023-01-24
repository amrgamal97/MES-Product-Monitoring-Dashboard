import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
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
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-goodvsscrap-chart',
  templateUrl: './goodvsscrap-chart.component.html',
  styleUrls: ['./goodvsscrap-chart.component.scss'],
})
export class GoodvsscrapChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'distibuted',
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      colors: ['#00D3BE', '#4C788D'],
      plotOptions: {
        bar: {
          columnWidth: '35%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        customLegendItems: ['Scrap', 'Good'],
        itemMargin: {
          vertical: 5,
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          ['Machine'],
          ['Machine'],
          ['Machine'],
          ['Machine'],
          ['Machine'],
          ['Machine'],
          ['Machine'],
          ['Machine'],
        ],
        labels: {
          style: {
            colors: ['#4C788D'],
            fontSize: '12px',
          },
        },
      },
    };
  }

  ngOnInit(): void {}
}
