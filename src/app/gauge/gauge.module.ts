import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeComponent } from './gauge.component';
import { StatusGaugeComponent } from './status-gauge/status-gauge.component';
import { StatusGaugeModule } from './status-gauge/status-gauge.module';
import { WeighbridgeNameModule } from './weighbridge-name/weighbridge-name.module';
import { LastTrainModule } from './last-train/last-train.module';



@NgModule({
  declarations: [GaugeComponent],
  imports: [
    CommonModule,
    StatusGaugeModule,
    WeighbridgeNameModule,
    LastTrainModule
  ],
  exports: [GaugeComponent]
})
export class GaugeModule { }
