import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Weighbridge } from 'src/app/data-model/Weighbridge.model';
import { WeighbridgeService } from 'src/app/services/weighbridge.service';

@Component({
  selector: 'app-weighbridge-name',
  templateUrl: './weighbridge-name.component.html',
  styleUrls: ['./weighbridge-name.component.scss']
})
export class WeighbridgeNameComponent implements OnInit {
  private readonly onDestroy = new Subject<void>();
  public weighbridge: Weighbridge = new Weighbridge();
  constructor(private readonly weighbridgeService: WeighbridgeService) { }

  ngOnInit(): void {
    this.weighbridgeService
    .getWeighbridge('weighbridgeName')
    .pipe(takeUntil(this.onDestroy))
    .subscribe((data) => {
      if (data) {
        this.weighbridge = data;
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }

}
