import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-material-profile-consum',
  templateUrl: './material-profile-consum.component.html',
  styleUrls: ['./material-profile-consum.component.scss'],
})
export class MaterialProfileConsumComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Process 1',
          data: [
            {
              x: 'Material 1',
              y: [
                new Date('2019-03-05').getTime(),
                new Date('2019-03-08').getTime(),
              ],
            },
            {
              x: 'Material 2',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-11').getTime(),
              ],
            },
            {
              x: 'Material 1',
              y: [
                new Date('2019-03-11').getTime(),
                new Date('2019-03-16').getTime(),
              ],
            },
          ],
        },
        {
          name: 'Process 2',
          data: [
            {
              x: 'Material 1',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-05').getTime(),
              ],
            },
            {
              x: 'Material 3',
              y: [
                new Date('2019-03-06').getTime(),
                new Date('2019-03-09').getTime(),
              ],
            },
            {
              x: 'Material 2',
              y: [
                new Date('2019-03-10').getTime(),
                new Date('2019-03-19').getTime(),
              ],
            },
          ],
        },
        {
          name: 'Process 3',
          data: [
            {
              x: 'Material 1',
              y: [
                new Date('2019-01-02').getTime(),
                new Date('2019-03-25').getTime(),
              ],
            },
            {
              x: 'Material 3',
              y: [
                new Date('2019-08-16').getTime(),
                new Date('2019-03-19').getTime(),
              ],
            },
            {
              x: 'Material 2',
              y: [
                new Date('2019-01-10').getTime(),
                new Date('2019-03-19').getTime(),
              ],
            },
          ],
        },
        {
          name: 'Process 4',
          data: [
            {
              x: 'Material 1',
              y: [
                new Date('2019-02-02').getTime(),
                new Date('2019-03-15').getTime(),
              ],
            },
            {
              x: 'Material 3',
              y: [
                new Date('2019-03-06').getTime(),
                new Date('2019-04-19').getTime(),
              ],
            },
            {
              x: 'Material 2',
              y: [
                new Date('2019-03-22').getTime(),
                new Date('2019-03-09').getTime(),
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
        },
      },
      xaxis: {
        type: 'datetime',
      },
      legend: {
        position: 'top',
      },
    };
  }

  ngOnInit(): void {}
}
