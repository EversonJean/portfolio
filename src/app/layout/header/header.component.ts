import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeout', [
      state('true', style({ display: 'block' })),
      state('false', style({ display: 'none' })),
      transition('* => *', animate('.2s linear'))
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({  display: 'block', transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ],
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  fixed = false;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.changes.subscribe(value => {
      if (value == null) {
        this.fixed = !this.fixed;
      } else {
        this.fixed = value;
      }
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
