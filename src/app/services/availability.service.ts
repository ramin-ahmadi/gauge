import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Availability } from '../data-model/availability.model';
import { AvailabilityDataMock } from '../mock-data/availability-data.mock';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private readonly availabilityDataMock: AvailabilityDataMock;
  constructor() { 
    this.availabilityDataMock = new AvailabilityDataMock();
  }

  public getAvailability(): Observable<Availability[]> {
    return of(this.availabilityDataMock.availabilities);
  }
}
