import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private headerService: HeaderService) { }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    if (window.pageYOffset > window.innerHeight) {
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
