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

  teamMembers = [
    {
      name: 'Amit Sharma',
      role: 'Founder & CEO',
      desc: 'Visionary leader driving innovation and growth.',
      img: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Neha Verma',
      role: 'Project Manager',
      desc: 'Ensures timely and quality project delivery.',
      img: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Rahul Singh',
      role: 'Lead Developer',
      desc: 'Expert in modern scalable web applications.',
      img: 'https://i.pravatar.cc/150?img=13'
    },
    {
      name: 'Priya Mehta',
      role: 'UI/UX Designer',
      desc: 'Creates user-friendly and elegant designs.',
      img: 'https://i.pravatar.cc/150?img=14'
    }
  ];
}
