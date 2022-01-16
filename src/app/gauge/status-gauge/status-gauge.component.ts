import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Availability } from 'src/app/data-model/availability.model';
import { Train } from 'src/app/data-model/train.model';
import { Weighbridge } from 'src/app/data-model/Weighbridge.model';
import { AvailabilityService } from 'src/app/services/availability.service';
import { TrainService } from 'src/app/services/train.service';
import { WeighbridgeService } from 'src/app/services/weighbridge.service';
import Moment from 'moment';
@Component({
  selector: 'app-status-gauge',
  templateUrl: './status-gauge.component.html',
  styleUrls: ['./status-gauge.component.scss'],
})
export class StatusGaugeComponent implements OnInit {
  private readonly onDestroy = new Subject<void>();
  public weighbridge: Weighbridge = new Weighbridge();
  public availabilities: Availability[] = [];
  public trains: Train[] =[];

  constructor(
    private readonly weighbridgeService: WeighbridgeService,
    private readonly availabilityService: AvailabilityService,
    private readonly trainService: TrainService
  ) {}

  ngOnInit(): void {
    this.weighbridgeService
      .getWeighbridge('weighbridgeName')
      .pipe(takeUntil(this.onDestroy))
      .subscribe((data) => {
        if (data) {
          this.weighbridge = data;
        }
      });

    this.availabilityService
      .getAvailability()
      .pipe(takeUntil(this.onDestroy))
      .subscribe((data) => {
        if (data) {
          this.availabilities = data;
        }
      });

      this.trainService
      .getTrains()
      .pipe(takeUntil(this.onDestroy))
      .subscribe((data) => {
        if (data) {
          this.trains = data;
        }
      });
  }

  public getStatusColor(statusColor?: string): string {
    return this.weighbridgeService.getStatusColorCode(statusColor);
  }

  public polarToCartesian(centerX:number, centerY:number, radius:number, angleInDegrees:number) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  
  public describeArc(x:number, y:number, radius:number, startAngle:number, endAngle:number): string{
  
      var start = this.polarToCartesian(x, y, radius, endAngle);
      var end = this.polarToCartesian(x, y, radius, startAngle);
  
      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");
      return d;       
  }

  public drawAvailability(fromDateTime?:string, toDateTime?: string):string {
    console.log(Moment(fromDateTime).format('YYYY-MM-DD HH:mm:ss'),Moment(toDateTime).format('YYYY-MM-DD HH:mm:ss'))
    let durationInMinutes=  Math.round(this.getDurationOfAvailability(fromDateTime,toDateTime));
    let startTime = Math.round(this.getStartOfAvailability(fromDateTime))
    console.log("startTime:", startTime)
    console.log("Duration:", durationInMinutes)
    let d: string = this.describeArc(25, 25.25, 25.5, startTime, durationInMinutes+startTime);
    return d;
  }

  public getStartOfAvailability(fromDateTime?:string): number {
    let startTime = Math.abs((Moment(fromDateTime).startOf('day').diff(fromDateTime, 'minutes')/ 1440));
    let circleArea = 360 * startTime;
    return circleArea;
  }

  public getDurationOfAvailability(fromDateTime?:string,toDateTime?: string): number {
    let minutes = (Moment(toDateTime).diff(fromDateTime, 'minutes') / 1440);
    let circleArea = 360 * minutes;
    return circleArea;
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}
