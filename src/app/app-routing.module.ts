import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./components/employee/employee.component";
import {ButtonComponent} from "./components/button/button.component";
import {TextButtonComponent} from "./components/text-button/text-button.component";

const routes: Routes = [
  {
    path:'employee', component:EmployeeComponent
  },
  {
    path:'button', component:TextButtonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
