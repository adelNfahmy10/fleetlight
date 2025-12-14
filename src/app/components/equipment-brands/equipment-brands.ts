import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { BrowserService } from '../../core/services/browser-check/browser-service';

@Component({
  selector: 'app-equipment-brands',
  imports: [],
  templateUrl: './equipment-brands.html',
  styleUrl: './equipment-brands.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EquipmentBrands {
  private readonly _BrowserService = inject(BrowserService)

  isBrowser:boolean = this._BrowserService.isBrowser

  equipmentBrands = [
    {
      name: 'تويوتا',
      image: 'assets/images/equipment-images/toyota-colored.png'
    },
    {
      name: 'بي إم دبليو',
      image: 'assets/images/equipment-images/bmw-colored.png'
    },
    {
      name: 'شانجان',
      image: 'assets/images/equipment-images/changan-colored.png'
    },
    {
      name: 'شيفروليه',
      image: 'assets/images/equipment-images/chevrolet-colored.png'
    },
    {
      name: 'فورد',
      image: 'assets/images/equipment-images/ford-colored.png'
    },
    {
      name: 'جي إم سي',
      image: 'assets/images/equipment-images/gmc-colored.png'
    },
    {
      name: 'هوندا',
      image: 'assets/images/equipment-images/honda-colored.png'
    },
    {
      name: 'هيونداي',
      image: 'assets/images/equipment-images/hyundai-colored.png'
    },
    {
      name: 'كيا',
      image: 'assets/images/equipment-images/kia-colored.png'
    },
    {
      name: 'لكزس',
      image: 'assets/images/equipment-images/lexus-colored.png'
    },
    {
      name: 'نيسان',
      image: 'assets/images/equipment-images/nissan-colored.png'
    }
  ];

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
