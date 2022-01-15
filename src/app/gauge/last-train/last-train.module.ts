import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastTrainComponent } from './last-train.component';




@NgModule({
  declarations: [
    LastTrainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LastTrainComponent]
})
export class LastTrainModule { }
