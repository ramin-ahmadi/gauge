import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Train } from '../data-model/train.model';
import { TrainsDataMock } from '../mock-data/trains-data.mock';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private readonly trainsDataMock: TrainsDataMock;
  constructor() { 
    this.trainsDataMock = new TrainsDataMock();
  }

  public getTrains(): Observable<Train[]> {
    return of(this.trainsDataMock.trains);
  }
}
