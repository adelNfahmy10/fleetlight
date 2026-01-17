import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { BrowserService } from '../../core/services/browser-check/browser-service';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  private readonly _BrowserService = inject(BrowserService)

  isRtl: boolean = false;
  activeLink: string = 'home';
  sections = [
    { id: 'home', name: 'الرئيسية' },
    { id: 'spare-parts', name: 'قطع الغيار' },
    { id: 'equipment-brands', name: 'ماركات المعدات' },
    { id: 'equipment', name: 'المعدات' },
    { id: 'logistics', name: 'الخدمات اللوجستية' },
    { id: 'trust', name: 'ثقة العملاء' },
  ];

  ngOnInit() {
    if (this._BrowserService.isBrowser) {
      const storedDir = localStorage.getItem('dir');
      if (storedDir) {
        // لو فيه قيمة مخزنة استخدمها
        this.isRtl = storedDir === 'rtl';
      } else {
        // الافتراضي عربي
        this.isRtl = true;
      }

      // ضع الاتجاه في html
      document.documentElement.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr');
    }
  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeLink = entry.target.id;
            }
          });
        },
        { threshold: 0.5 }
      );

      this.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setActiveLink(sectionId);
    }
  }

  setActiveLink(sectionId: string) {
    this.activeLink = sectionId;
  }

  toggleDir() {
    this.isRtl = !this.isRtl;

    if (this._BrowserService.isBrowser) {
      const htmlTag = document.documentElement;
      htmlTag.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr');
      localStorage.setItem('dir', this.isRtl ? 'rtl' : 'ltr');
    }
  }
}
