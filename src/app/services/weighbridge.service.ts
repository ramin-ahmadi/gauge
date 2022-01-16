import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Weighbridge } from '../data-model/Weighbridge.model';
import { WeighbridgeDataMock } from '../mock-data/weighbridge-data.mock';


@Injectable({
  providedIn: 'root',
})
export class WeighbridgeService {
  private readonly weighbridgeDataMock: WeighbridgeDataMock;

  constructor() {
    this.weighbridgeDataMock = new WeighbridgeDataMock();
  }

  public getWeighbridge(weighbridgeName?: string): Observable<Weighbridge> {
    return of(this.weighbridgeDataMock.weighbridge);
  }

  public getStatusColorCode(statusColor?: string): string {
    switch (statusColor) {
      case 'Green':
        return '--color-green';
      case 'Amber':
        return '--color-yellow';
      case 'Red':
        return '--color-red';
    }
    return '--color-green';
  }
}
