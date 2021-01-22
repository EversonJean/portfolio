import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    if (window.pageYOffset > window.innerHeight - 10) {
      if (!this.headerService.isShow) {
        this.headerService.show();
      }
    } else {
      if (this.headerService.isShow) {
        this.headerService.hide();
      }
    }
  }
}
