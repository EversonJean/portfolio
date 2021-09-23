import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DownloadService, HeaderService } from 'src/app/core';
import { saveAs } from 'file-saver';

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
        style({ display: 'block', transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ],
})
export class HeaderComponent implements OnInit {

  fixed = false;
  navbarOpen = false;

  constructor(private headerService: HeaderService, private downloadService: DownloadService) {
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

  download() {
    this.downloadService
          .download('assets/files/CurriculumEversonJean.pdf')
          .subscribe(blob => saveAs(blob, 'eversonhumenhuk.pdf'))
  }
}
