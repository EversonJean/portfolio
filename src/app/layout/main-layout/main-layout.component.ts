import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HeaderService } from 'src/app/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(private headerService: HeaderService) { }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    if (window.pageYOffset > window.innerHeight - 10) {
      if (!this.headerService.isFixed) {
        this.headerService.pin();
      }
    } else {
      if (this.headerService.isFixed) {
        this.headerService.unpin();
      }
    }
  }
}
