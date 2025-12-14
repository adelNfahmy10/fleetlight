import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  isBrowser: boolean = isPlatformBrowser(this._PLATFORM_ID);
}
