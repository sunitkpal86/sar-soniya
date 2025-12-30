import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-career',
  imports: [CommonModule, FormsModule],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {

  searchText = '';
  location = '';

  jobs = [
    {
      title: 'Operator',
      company: 'PICL India Limited',
      location: 'Faridabad IMT, Haryana',
      type: 'Full Time',
      experience: 'Fresher'
    },
    {
      title: 'Helper',
      company: 'PICL India Limited',
      location: 'Faridabad IMT, Haryana',
      type: 'Full Time',
      experience: 'Fresher'
    },
    {
      title: 'Welder',
      company: 'PICL India Limited',
      location: 'Faridabad IMT, Haryana',
      type: 'Full Time',
      experience: 'Fresher'
    },
    {
      title: 'Power Press Operator',
      company: 'PICL India Limited',
      location: 'Faridabad IMT, Haryana',
      type: 'Full Time',
      experience: 'Fresher'
    },
    {
      title: 'Tellecaller Female',
      company: 'Smile India Limited',
      location: 'Noida, India',
      type: 'Full Time',
      experience: '3-5 Years'
    },
    {
      title: 'Accountant',
      company: 'Sarvsiddh Group',
      location: 'Delhi, India',
      type: 'Full Time',
      experience: '1-3 Years'
    },
    {
      title: 'Assistant Manufacturing Chemist',
      company: 'Sarvsiddh Group',
      location: 'Noida, India',
      type: 'Full Time',
      experience: '2-4 Years'
    },
    {
      title: 'Production Chemist',
      company: 'Sarvsiddh Group',
      location: 'Remote',
      type: 'Full Time',
      experience: '3-5 Years'
    },
    {
      title: 'QC/QA Chemist',
      company: 'Sarvsiddh Group',
      location: 'Delhi, India',
      type: 'Contract',
      experience: '1-3 Years'
    },
    {
      title: 'Frontend Developer',
      company: 'Sarvsiddh Group',
      location: 'Noida, India',
      type: 'Full Time',
      experience: '2-4 Years'
    },
    {
      title: 'Angular Developer',
      company: 'Sarvsiddh Group',
      location: 'Remote',
      type: 'Full Time',
      experience: '3-5 Years'
    },
    {
      title: 'UI/UX Designer',
      company: 'Sarvsiddh Group',
      location: 'Delhi, India',
      type: 'Contract',
      experience: '1-3 Years'
    }

  ];

  filteredJobs() {
    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(this.searchText.toLowerCase()) &&
      job.location.toLowerCase().includes(this.location.toLowerCase())
    );
  }

}
