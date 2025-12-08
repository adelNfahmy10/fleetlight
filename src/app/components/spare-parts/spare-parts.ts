import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-spare-parts',
  imports: [],
  templateUrl: './spare-parts.html',
  styleUrl: './spare-parts.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SpareParts {
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
