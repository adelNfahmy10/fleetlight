import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
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


  // ===============================
  // Sections & nav links
  // ===============================
  sections!: HTMLElement[];

  @ViewChildren('navLink', { read: ElementRef })
  navLinks!: QueryList<ElementRef>;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // جلب كل الأقسام
    this.sections = Array.from(
      document.querySelectorAll(
        '#about-us, #what-fleetlight-offers, #how-it-works, #special-feature, #who-benefits, #vision-mission, #core-values'
      )
    );

    // ربط click events
    this.bindClickEvents();
  }

  // =========================
  // Smooth Scroll عند الضغط
  // =========================
  bindClickEvents() {
    this.navLinks.forEach((linkRef) => {
      const link = linkRef.nativeElement as HTMLElement;

      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('data-target');
        const section = document.getElementById(targetId!);

        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }

  // =========================
  // Scroll Spy - تفعيل الـ active link أثناء التمرير
  // =========================
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    this.sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.id;

      if (scrollPosition >= top && scrollPosition < bottom) {
        this.setActiveLink(id);
      }
    });
  }

  setActiveLink(sectionId: string) {
    this.navLinks.forEach((linkRef:any) => {
      const link = linkRef.nativeElement as HTMLElement;
      link.classList.remove('active');

      if (link.getAttribute('data-target') === sectionId) {
        link.classList.add('active');
      }
    });
  }
}
