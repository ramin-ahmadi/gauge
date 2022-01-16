import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaugeModule } from './gauge/gauge.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaugeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
