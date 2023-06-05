import { Component,Input, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() public chartData!: ChartConfiguration<'line'>['data'];
  @Input() public chartOptions!: ChartOptions<'line'>;
  @Input() public chartLegend!: boolean;
  @Input() public chartType!:any;
  public isLoading: boolean = false;
  @Output() public chartRendered: EventEmitter<void> = new EventEmitter<void>();
  public onChartRendered() {
    this.isLoading = true;

    this.chartRendered.emit();
  }
}
