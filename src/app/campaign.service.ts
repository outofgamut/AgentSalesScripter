import { Injectable } from '@angular/core';
import {Campaign} from './campaign';

@Injectable()
export class CampaignService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for Campaigns
  campaigns: Campaign[] = [];

  constructor() {
  }

  // Simulate POST /campaigns
addCampaign(campaign: Campaign): CampaignService {
  if (!campaign.id) {
    campaign.id = ++this.lastId;
  }
  this.campaigns.push(campaign);
  return this;
}

// Simulate DELETE /campaigns/:id
deleteCampaignById(id: number): CampaignService {
  this.campaigns = this.campaigns
    .filter(campaign => campaign.id !== id);
  return this;
}

// Simulate PUT /campaigns/:id
updateCampaignById(id: number, values: Object = {}): Campaign {
  let campaign = this.getCampaignById(id);
  if (!campaign) {
    return null;
  }
  Object.assign(campaign, values);
  return campaign;
}

// Simulate GET /campaigns
getAllCampaigns(): Campaign[] {
  return this.campaigns;
}

// Simulate GET /campaigns/:id
getCampaignById(id: number): Campaign {
  return this.campaigns
    .filter(campaign => campaign.id === id)
    .pop();
}

// Toggle campaign active
// toggleTodoComplete(todo: Todo){
//   let updatedTodo = this.updateTodoById(todo.id, {
//     complete: !todo.complete
//   });
//   return updatedTodo;
// }
//   getCampaigns(): Promise<Campaign[]>{
//   	return Promise.resolve(CAMPAIGNDATA);
//   }
// }

const CAMPAIGNDATA: Campaign[] = [
  {id: 1, name: 'Mercury', phoneNumber: 58 },
  {id: 2, name: 'Venus', phoneNumber: 108 },
  {id: 3, name: 'Earth', phoneNumber: 150 },
  {id: 4, name: 'Mars', phoneNumber: 228 },
  {id: 5, name: 'Jupiter', phoneNumber: 778 },
  {id: 6, name: 'Saturn', phoneNumber: 886 },
  {id: 7, name: 'Uranus', phoneNumber: 1800 },
  {id: 8, name: 'Neptune', phoneNumber: 2800 }
];
