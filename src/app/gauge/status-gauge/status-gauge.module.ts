import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusGaugeComponent } from './status-gauge.component';



@NgModule({
  declarations: [StatusGaugeComponent],
  imports: [
    CommonModule
  ],
  exports: [StatusGaugeComponent]
})
export class StatusGaugeModule { }
