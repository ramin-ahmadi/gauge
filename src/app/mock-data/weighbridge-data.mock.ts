import { Weighbridge } from '../data-model/Weighbridge.model';

export class WeighbridgeDataMock {
  public weighbridge: Weighbridge = {
    tSR4000State: 'Ready to Weigh',
    iLine2State: 'Started',
    tSR4000Status: 'Green',
    iLine2Status: 'Green',
    verified: true,
    minutesSinceLastTrain: 61,
  };
}
