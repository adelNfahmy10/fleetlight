import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-equipment-brands',
  imports: [],
  templateUrl: './equipment-brands.html',
  styleUrl: './equipment-brands.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EquipmentBrands {
  swiperConfig: SwiperOptions = {
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 2,
      }
    }
  };
}
