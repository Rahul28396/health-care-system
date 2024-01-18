import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CanvasJSAngularChartsModule
  ]
})
export class DashboardModule { }
