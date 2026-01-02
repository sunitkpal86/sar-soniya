import { Component } from '@angular/core';
import { Features } from '../features/features';
import { About } from "../about/about";

@Component({
  selector: 'app-home',
  imports: [About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
