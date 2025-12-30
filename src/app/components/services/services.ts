import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  activeCategory = 'placement';

  categories = [
    { id: 'placement', name: 'Placement Services' },
    { id: 'payroll', name: 'Payroll Services' },
    { id: 'security', name: 'Security Services' },
    { id: 'huousekeeping', name: 'House-Keeping Services' }
  ];

  services: any = {
    placement: [
      { title: 'Information Technology', desc: 'Full Stack Developer, DevOps Engineer, Data Analyst, AI/ML Engineer, Cybersecurity Expert, UI/UX Designer, Mobile App Developer, Cloud Architect.' },
      { title: 'Healthcare', desc: 'Doctors (Surgeons, Specialists), Nurses, Clinical Psychologists, Acupuncturists, Pharmacists.' },
      { title: 'Finance & Accounting', desc: 'Chartered Accountant (CA), Investment Banker, Financial Analyst, Accounts Manager, SAP FICO Consultant.' },
      { title: 'Engineering', desc: 'Software, Mechanical, Electrical, Aerospace, Oil & Gas Engineers, Quality Assurance Engineers, Project Managers.' },
      { title: 'Management', desc: 'Business Consultant, Management Consultant, Product Manager, Marketing Manager, HR Manager, Operations Manager.' },
      { title: 'Digital & Marketing', desc: 'Digital Marketing Manager, SEO Executive, Content Writer, Brand Manager, PR Specialist, Research Executive. ' },
      { title: 'Creative & Design', desc: 'Graphic Designer, Animator, Video Editor, Architect, Interior Designer, Fashion Designer, Art Therapist, Actor/Model.' },
      { title: 'Aviation & Hospitality', desc: 'Airline Pilot, Cabin Crew, Air Traffic Controller, Airport Operations Staff, Reservation Agent, Hotel Management.' },
      { title: 'Legal', desc: 'Lawyers, Legal Consultants.' },
      { title: 'Education', desc: 'Teachers, Counsellors, Academic Researchers.' },
      { title: 'Green Careers', desc: 'Sustainability Consultants, Green Architects, Urban Planners, Wind Energy Roles. ' },
     
    ],
    payroll: [
      { title: 'Information Technology', desc: 'Full Stack Developer, DevOps Engineer, Data Analyst, AI/ML Engineer, Cybersecurity Expert, UI/UX Designer, Mobile App Developer, Cloud Architect.' },
      { title: 'Digital & Marketing', desc: 'Digital Marketing Manager, SEO Executive, Content Writer, Brand Manager, PR Specialist, Research Executive. ' },
      { title: 'Education', desc: 'Teachers, Counsellors, Academic Researchers.' },
    ],
    security: [
      { title: 'Man Guarding Services', desc: 'When it comes to the security of any event, expertise is the most crucial aspect. This refers to the security that is needed while having huge events like weddings, concerts, parties, exhibitions, and much more. Sarvsiddh Group guarantees outstanding safety, security, and presence at any event.' },
      { title: 'Indusrial Security', desc: 'Sarvsiddh Group provides industrial security services for a wide variety of industrial environments. It refers to the protection of industrial installations, utilities, resources, materials and even classified information that needs safety from loss or damage.' },
      { title: 'Bank / ATM Security', desc: 'Our Bank Security Officer protects bank assets, employees, and customers by monitoring surveillance, patrolling premises, controlling access, responding to emergencies (like robberies or disturbances), and maintaining security logs, while also training staff on safety protocols, liaising with law enforcement, and implementing overall security programs to prevent fraud, theft, and breaches, ensuring compliance with banking regulations.' },
      { title: 'Property Security', desc: "Our property security guard being a visible deterrent and first responder, responsible for access control (checking IDs, logging visitors), regular patrols (interior/exterior, securing doors/windows), surveillance (CCTV monitoring), emergency response (alarms, medical, fire), and detailed incident reporting, all while maintaining order and assisting residents/staff."}
    ],
    huousekeeping: [
      { title: 'Corporate Huousekeeping', desc: 'Our Corporate housekeeping take care the administrative/legal tasks keeping a company compliant (records, filings, meetings) to protect liability, and the physical cleaning/maintenance of office spaces (floors, restrooms, supplies) to ensure a pleasant and safe environment.' },
      { title: 'Industrial Huousekeeping', desc: 'Our Industrial Housekeeping involves specialized cleaning and organization in factories, warehouses, or plants, focusing on safety, health, and production quality by using specific equipment to handle dust, spills, and machinery, going beyond routine tasks to adhere to strict industrial regulations and prevent hazards.' },
      { title: 'Bank Huousekeeping', desc: 'Our Bank Housekeeping involves maintaining cleanliness, hygiene, and orderliness in bank premises, covering offices, public areas, washrooms, and sometimes exterior grounds, through tasks like dusting, mopping, sanitizing, waste disposal, and restocking supplies to ensure a professional and healthy environment for staff and customers, often managed by dedicated staff or external agencies.' },
      { title: 'Warehouse Huousekeeping', desc: 'Our Warehouse housekeeping involves in the essential process of cleaning, organizing, and maintaining a warehouse to ensure a safe, efficient, and hazard-free work environment, involving daily tasks like sweeping, mopping, trash removal, sanitizing surfaces, and organizing storage, all while focusing on preventing slips, trips, falls, and clutter to boost productivity and worker safety.' },
      { title: 'Hotel Huousekeeping', desc: 'Our Hotel housekeeper ensures guest rooms and public areas are clean, comfortable, and well-stocked by performing tasks like making beds, cleaning bathrooms, dusting, vacuuming, replenishing supplies (toiletries, linens), emptying trash, and reporting maintenance issues, all while respecting guest privacy and following hotel standards for safety and service. Key duties include cleaning rooms after check-out and servicing occupied rooms, restocking carts, handling lost-and-found, and providing professional service.' }
    ]
  };

  setCategory(id: string) {
    this.activeCategory = id;
  }

}
