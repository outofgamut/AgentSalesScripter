import { Component } from '@angular/core';
import { Campaign } from './campaign';
import { CampaignService } from './campaign.service';

@Component({
  selector: 'Sales-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CampaignService]
})
export class AppComponent {
  title = 'Sales works!';
  newCampaign: Campaign = new Campaign();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `CampaignService`
  // and assign it to a property called `campaignService`
  constructor(private campaignService: CampaignService) {
  }

  // Service is now available as this.campaignService
  addCampaign() {
    this.campaignService.addCampaign(this.newCampaign);
    this.newCampaign = new Campaign();
  }

  // toggleTodoComplete(todo) {
  //   this.todoDataService.toggleTodoComplete(todo);
  // }

  removeCampaign(campaign) {
    this.campaignService.deleteCampaignById(campaign.id);
  }

  get campaigns() {
    return this.campaignService.getAllCampaigns();
  }
}
