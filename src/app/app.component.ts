import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from './shared/image-slider/image-slider.component';
import { Slide } from './core/interfaces/slide';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  slides: Slide[] = [
    { url: 'assets/images/clothes-1.jpg', title: 'Clothes 1' },
    { url: 'assets/images/clothes-2.jpg', title: 'Clothes 2' },
    { url: 'assets/images/clothes-3.jpg', title: 'Clothes 3' }
  ];


}
