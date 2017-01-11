import {Campaign} from './campaign';

describe('Campaign', () => {
  it('should create an instance', () => {
    expect(new Campaign()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let campaign = new Campaign({
      name: 'hello',
      phoneNumber: 4696443758
    });
    expect(campaign.name).toEqual('hello');
    expect(campaign.phoneNumber).toEqual(4696443758);
  });
});
