import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {

  clients = [
  { name: 'Client One', logo: 'assets/picl.png', href:'https://piclindia.com' },
  { name: 'Client Two', logo: 'assets/client2.png', href:'https://ukbelectronics.com' },
  { name: 'Client Three', logo: 'assets/client3.png' , href:'https://ukbelectronics.com' },
  { name: 'Client Four', logo: 'assets/client4.png' , href:'https://unicomtools.com' },
  { name: 'Client Five', logo: 'assets/client5.png' , href:'https://www.herocycles.com' },
  { name: 'Client Five', logo: 'assets/client6.png' , href:'https://www.smilefoundationindia.org' },
  { name: 'Client Six', logo: 'assets/client7.png' , href:'https://smileindiatrust.org' },
  { name: 'Client Six', logo: 'assets/client8.png', href:'https://www.ir.ambergroupindia.com' }
];


}
