import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  images = [
    { src: 'assets/gallery1.jpg', title: 'Office Space' },
    { src: 'assets/gallery2.jpg', title: 'Team Work' },
    { src: 'assets/gallery3.jpg', title: 'Technology' },
    { src: 'assets/gallery4.jpg', title: 'Startup' },
    { src: 'assets/gallery5.jpg', title: 'Meetings' },
    { src: 'assets/gallery6.jpg', title: 'Business' }
  ];
}
