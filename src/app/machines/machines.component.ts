import { PropertiesComponent } from './properties/properties.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../dashboard/dashboard.component';
import { FormControl } from '@angular/forms';
interface Orders {
  value: string;
  viewValue: string;
}
interface Routes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
})
export class MachinesComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  selectedValue: string;
  selectedCar: string;
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  orders: Orders[] = [
    { value: 'order-0', viewValue: 'Job Order 1' },
    { value: 'order-1', viewValue: 'Job Order 2' },
    { value: 'order-2', viewValue: 'Job Order 3' },
  ];
  routes: Routes[] = [
    { value: 'route-0', viewValue: 'Route 1' },
    { value: 'route-1', viewValue: 'Route 2' },
    { value: 'route-2', viewValue: 'Route 3' },
  ];
  table1Tr(n: number) {
    return Array(n);
  }
  fontStyleControl = new FormControl('kpis');
  fontStyle?: string;
  items(n: number) {
    return Array(n);
  }
  selected: number = 0;
  constructor(private dialog: MatDialog) {
    this.chartOptions = {
      chart: {
        type: 'radialBar',
        height: 100,
        width: 90,
        sparkline: {
          enabled: false,
        },
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
      series: [76],
      plotOptions: {
        radialBar: {
          track: {
            background: '#CDD5E1',
            margin: 0,
            strokeWidth: '100%',
          },
          dataLabels: {
            show: false,
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
        height: 100,
        width: 90,
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
            show: false,
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
        height: 100,
        width: 90,
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
            show: false,
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

  view() {
    this.dialog.open(PropertiesComponent, {
      height: '450px',
      width: '600px',
    });
  }
}
