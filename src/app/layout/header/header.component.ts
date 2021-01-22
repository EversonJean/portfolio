import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('header') header: ElementRef | any;

  fixed = false;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.observable.subscribe(value => {
      if (value == null) {
        this.fixed = !this.fixed;
      } else {
        this.fixed = value;
      }
    });
  }
}
