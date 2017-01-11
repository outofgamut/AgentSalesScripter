/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CampaignService } from './campaign.service';
import { Campaign } from './campaign';

describe('CampaignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignService]
    });
  });

  it('should ...', inject([CampaignService], (service: CampaignService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllCampaigns()', () => {

    it('should return an empty array by default', inject([CampaignService], (service: CampaignService) => {
      expect(service.getAllCampaigns()).toEqual([]);
    }));

    it('should return all campaigns', inject([CampaignService], (service: CampaignService) => {
      let campaign1 = new Campaign({name: 'Campaign 1', phoneNumber: 4696443758});
      let campaign2 = new Campaign({name: 'Campaign 2', phoneNumber: 9723046065});
      service.addCampaign(campaign1);
      service.addCampaign(campaign2);
      expect(service.getAllCampaigns()).toEqual([campaign1, campaign2]);
    }));

  });

  describe('#save(campaign)', () => {

    it('should automatically assign an incrementing id', inject([CampaignService], (service: CampaignService) => {
      let campaign1 = new Campaign({name: 'Campaign 1', phoneNumber: 4696443758});
      let campaign2 = new Campaign({name: 'Campaign 2', phoneNumber: 9723046065});
      service.addCampaign(campaign1);
      service.addCampaign(campaign2);
      expect(service.getCampaignById(1)).toEqual(campaign1);
      expect(service.getCampaignById(2)).toEqual(campaign2);
    }));

  });

  describe('#deleteCampaignById(id)', () => {

    it('should remove campaign with the corresponding id', inject([CampaignService], (service: CampaignService) => {
      let campaign1 = new Campaign({name: 'Campaign 1', phoneNumber: 4696443758});
      let campaign2 = new Campaign({name: 'Campaign 2', phoneNumber: 9723046065});
      service.addCampaign(campaign1);
      service.addCampaign(campaign2);
      expect(service.getAllCampaigns()).toEqual([campaign1, campaign2]);
      service.deleteCampaignById(1);
      expect(service.getAllCampaigns()).toEqual([campaign2]);
      service.deleteCampaignById(2);
      expect(service.getAllCampaigns()).toEqual([]);
    }));

    it('should not remove anything if campaign with corresponding id is not found', inject([CampaignService], (service: CampaignService) => {
      let campaign1 = new Campaign({name: 'Campaign 1', phoneNumber: 4696443758});
      let campaign2 = new Campaign({name: 'Campaign 2', phoneNumber: 9723046065});
      service.addCampaign(campaign1);
      service.addCampaign(campaign2);
      expect(service.getAllCampaigns()).toEqual([campaign1, campaign2]);
      service.deleteCampaignById(3);
      expect(service.getAllCampaigns()).toEqual([campaign1, campaign2]);
    }));

  });

  describe('#updateCampaignById(id, values)', () => {

    it('should return campaign with the corresponding id and updated data', inject([CampaignService], (service: CampaignService) => {
      let campaign = new Campaign({name: 'Campaign 1', phoneNumber: 4696443758});
      service.addCampaign(campaign);
      let updatedCampaign = service.updateCampaignById(1, {
        name: 'New Name'
      });
      expect(updatedCampaign.name).toEqual('New Name');
    }));

    it('should return null if campaign is not found', inject([CampaignService], (service: CampaignService) => {
      let campaign = new Campaign({name: 'Campaign 1', phoneNumber: 4696443758});
      service.addCampaign(campaign);
      let updatedCampaign = service.updateCampaignById(2, {
        name: 'new title'
      });
      expect(updatedCampaign).toEqual(null);
    }));

  });

  // describe('#toggleTodoComplete(todo)', () => {
  //
  //   it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(true);
  //     service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(false);
  //   }));
  //
  // });

});
