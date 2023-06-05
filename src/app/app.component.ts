import { Component,ViewChild  } from '@angular/core';
import {CommonTsService} from "./services/common.ts.service";
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import {ChartComponent} from './utils/chart/chart.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AngularDemo';
  public lineChartData:any;
  public lineChartOptions:any;
  public lineChartLegend:boolean=false;
  public barChartData:any;
  public isLoading: boolean = false;
  @ViewChild(ChartComponent)
  private chartComponent!: ChartComponent;
  constructor(private commonService: CommonTsService) {

    setTimeout(()=>{
      this.isLoading = false;
      this.lineChartLoader();
      this.barChartLoader();
    },2000)
  }


  lineChartLoader(){
    this.lineChartData = {    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
      ],
      datasets: [
        {
          data: [ 65, 59, 80, 81, 56, 55, 40 ],
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
    this.lineChartOptions = {
      responsive: false
    };
    this.lineChartLegend = false;
  }

barChartLoader(){
  this.barChartData={
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  }
}

  public handleChartRendered() {



  }

}
