import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderService {

  private fixed: BehaviorSubject<boolean | null>;

  constructor() {
    this.fixed = new BehaviorSubject<boolean | null>(false);
  }

  get changes() {
    return this.fixed.asObservable();
  }

  get isFixed() {
    return this.fixed.value;
  }

  pin() {
    this.fixed.next(true);
  }

  unpin() {
    this.fixed.next(false);
  }

  toogle() {
    this.fixed.next(null);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
