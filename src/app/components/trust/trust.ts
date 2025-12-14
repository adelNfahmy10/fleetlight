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
      title: 'الأصالة',
      description: 'نضمن منتجات أصلية معتمدة من أفضل العلامات التجارية.'
    },
    {
      image: 'assets/images/turst-images/delivery.jpg',
      title: 'تسليم سريع',
      description: 'توصيل المعدات في الوقت المحدد مباشرة إلى موقعك.'
    },
    {
      image: 'assets/images/turst-images/support.webp',
      title: 'دعم الخبراء',
      description: 'خبراؤنا متواجدون للإجابة على جميع استفساراتك.'
    },
    {
      image: 'assets/images/turst-images/price.png',
      title: 'شفافية الأسعار',
      description: 'أسعار واضحة بدون أي رسوم مخفية.'
    }
  ];
}
