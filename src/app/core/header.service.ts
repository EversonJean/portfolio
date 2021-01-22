import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderService {

  private showHeader: BehaviorSubject<boolean | null>;

  constructor() {
    this.showHeader = new BehaviorSubject<boolean | null>(false);
  }

  get observable() {
    return this.showHeader.asObservable();
  }

  get isShow() {
    return this.showHeader.value;
  }

  show() {
    this.showHeader.next(true);
  }

  hide() {
    this.showHeader.next(false);
  }

  toogle() {
    this.showHeader.next(null);
  }
}
