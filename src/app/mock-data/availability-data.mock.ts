import { Availability } from '../data-model/availability.model';

export class AvailabilityDataMock {
  public availabilities: Availability[] = [
    {
      fromDateTime: '2022-01-12T00:00:00+11:00',
      toDateTime: '2022-01-12T07:42:00+11:00',
      status: 'Green',
    },
    {
      fromDateTime: '2022-01-12T07:42:00+11:00',
      toDateTime: '2022-01-12T09:01:00+11:00',
      status: 'Red',
    },
    {
      fromDateTime: '2022-01-12T09:01:00+11:00',
      toDateTime: '2022-01-12T16:54:00+11:00',
      status: 'Green',
    },
  ];
}
