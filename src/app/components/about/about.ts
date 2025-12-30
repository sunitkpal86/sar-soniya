import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CeoDetails } from '../ceo-details/ceo-details';
import { CfoDetails } from '../cfo-details/cfo-details';
import { CooDetails } from '../coo-details/coo-details';
import { HraDetails } from '../hra-details/hra-details';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CeoDetails, CfoDetails, CooDetails, HraDetails],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  activeTab: string = 'ceo';

  setTab(tab: string) {
    this.activeTab = tab;
  }
  
}
