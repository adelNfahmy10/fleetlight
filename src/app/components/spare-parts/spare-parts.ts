import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { BrowserService } from '../../core/services/browser-check/browser-service';

@Component({
  selector: 'app-spare-parts',
  imports: [],
  templateUrl: './spare-parts.html',
  styleUrl: './spare-parts.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SpareParts {
  private readonly _BrowserService = inject(BrowserService)

  isBrowser:boolean = this._BrowserService.isBrowser
  spareParts = [
    {
      brand: 'كاتربيلر',
      price: 120,
      code: 'FL-4587X',
      type: 'أصلي',
      image: 'assets/images/saper-images/slider-1.jpg'
    },
    {
      brand: 'كوماتسو',
      price: 100,
      code: 'FL-9821B',
      type: 'أصلي',
      image: 'assets/images/saper-images/slider-1.jpg'
    },
    {
      brand: 'فولفو',
      price: 90,
      code: 'FL-7745Q',
      type: 'أصلي',
      image: 'assets/images/saper-images/slider-1.jpg'
    },
    {
      brand: 'هيتاشي',
      price: 74,
      code: 'FL-3310A',
      type: 'أصلي',
      image: 'assets/images/saper-images/slider-1.jpg'
    },
    {
      brand: 'هيتاشي',
      price: 88,
      code: 'FL-5642Z',
      type: 'أصلي',
      image: 'assets/images/saper-images/slider-1.jpg'
    },
    {
      brand: 'كاتربيلر',
      price: 210,
      code: 'FL-9981K',
      type: 'أصلي',
      image: 'assets/images/saper-images/slider-1.jpg'
    },
    {
      brand: 'فولفو',
      price: 40,
      code: 'FL-1209M',
      type: 'أصلي',
      image: 'assets/images/saper-images/slider-1.jpg'
    },
    {
      brand: 'كوماتسو',
      price: 65,
      code: 'FL-6701R',
      type: 'أصلي',
      image: 'assets/images/saper-images/slider-1.jpg'
    }
  ];


  swiperConfig: SwiperOptions = {
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      }
    }
  };
}
