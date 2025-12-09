import { Component } from '@angular/core';

@Component({
  selector: 'app-trust',
  imports: [],
  templateUrl: './trust.html',
  styleUrl: './trust.scss',
})
export class Trust {
benefits = [
  {
    image: 'assets/images/turst-images/authenticity.png',
    title: 'Authenticity',
    description: 'We guarantee original products certified by top brands.'
  },
  {
    image: 'assets/images/turst-images/delivery.jpg',
    title: 'Fast Delivery',
    description: 'Equipment delivered on time directly to your site.'
  },
  {
    image: 'assets/images/turst-images/support.webp',
    title: 'Expert Support',
    description: 'Our experts are available to answer all your questions.'
  },
  {
    image: 'assets/images/turst-images/price.png',
    title: 'Price Transparency',
    description: 'Clear pricing without any hidden fees.'
  }
];
}
