import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CardComponent } from './utils/card/card.component';
import { ChartComponent } from './utils/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextButtonComponent,
    EmployeeComponent,
    CardComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
