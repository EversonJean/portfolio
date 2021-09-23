import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HeaderService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('visibilityBackgroud', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 }))
    ]),
    trigger('visibilityButton', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ],
})
export class HomeComponent implements OnInit {

  name = "Everson Humenhuk";
  messageHello = "Hello, I'm ";
  messageDeveloper = "full-stack developer";

  showName = '';
  showMessageHello = '';
  showMessageDeveloper = '';
  loadedImage = false;
  showButton = false;

  constructor(private spinner: NgxSpinnerService, private headerService: HeaderService) {
  }

  ngOnInit() {
    // this.spinner.show();
    this.headerService.scrollTo('contact');
    this.loaded();
  }

  scrollTo(path: string) {
    this.headerService.scrollTo(path);
  }

  loaded() {
    this.loadedImage = true;
    this.spinner.hide();
    this.show();
  }

  show() {
    if (this.showMessageHello.length < this.messageHello.length) {
      this.showMessageHello += this.typing(this.messageHello, this.showMessageHello);
    } else {
      if (this.showName.length < this.name.length) {
        this.showName += this.typing(this.name, this.showName);
      } else {
        if (this.showMessageDeveloper.length < this.messageDeveloper.length) {
          this.showMessageDeveloper += this.typing(this.messageDeveloper, this.showMessageDeveloper);
        } else {
          this.showButton = true;
        }
      }
    }
  }

  stop() {
    this.showName = this.name;
    this.showMessageHello = this.messageHello;
    this.showMessageDeveloper = this.messageDeveloper;
    this.showButton = true;
  }

  typing(message: string, obj: string): any {
    if (obj.length < message.length) {
      setTimeout(this.show.bind(this), 100, this);
      return message[obj.length];
    }
  }
}
