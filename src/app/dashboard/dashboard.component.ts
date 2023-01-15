import { Component, OnInit, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
  ApexFill,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  trick = true;

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      chart: {
        type: 'radialBar',
        height: 120,
        width: 110,
        sparkline: {
          enabled: false,
        },
      },
      series: [76],
      plotOptions: {
        radialBar: {
          track: {
            background: '#CDD5E1',
            margin: 0,
            strokeWidth: '100%',
          },
          dataLabels: {
            name: {
              color: '#000000',
              fontSize: '15px',
            },
            value: {
              color: '#000000',
              fontSize: '18px',
              offsetY: -7,
              fontWeight: '600',
            },
          },
          hollow: {
            size: '75%',
          },
        },
      },
      fill: {
        colors: ['#00D1DE'],
      },
      labels: [''],
      stroke: {
        lineCap: 'round',
      },
    };
    this.chartOptions2 = {
      chart: {
        type: 'radialBar',
        height: 120,
        width: 110,
      },
      stroke: {
        lineCap: 'round',
      },
      series: [68],
      plotOptions: {
        radialBar: {
          track: {
            background: '#CDD5E1',
            margin: 0,
            strokeWidth: '100%',
          },
          dataLabels: {
            name: {
              color: '#000000',
              offsetY: -10,
              fontSize: '15px',
            },
            value: {
              color: '#000000',
              fontSize: '18px',
              offsetY: -7,
              fontWeight: '600',
            },
          },
          hollow: {
            size: '75%',
          },
        },
      },
      fill: {
        colors: ['#00D1DE'],
      },

      labels: [''],
    };
    this.chartOptions3 = {
      chart: {
        fontFamily: 'Montserrat, sans-serif',
        type: 'radialBar',
        height: 120,
        width: 110,
      },
      stroke: {
        lineCap: 'round',
      },
      series: [25],
      plotOptions: {
        radialBar: {
          track: {
            background: '#CDD5E1',
            margin: 0,
            strokeWidth: '100%',
          },
          dataLabels: {
            name: {
              color: '#000000',
              offsetY: -7,
              fontSize: '15px',
            },
            value: {
              color: '#000000',
              fontSize: '18px',
              offsetY: -7,
              fontWeight: '600',
            },
          },
          hollow: {
            size: '75%',
          },
        },
      },
      fill: {
        colors: ['#EC5967'],
      },
      labels: [''],
    };
  }

  ngOnInit(): void {}
}
