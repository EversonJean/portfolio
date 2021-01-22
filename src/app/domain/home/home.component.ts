import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(2000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  name = "Everson Humenhuk";
  messageHello = "Hello, I'm ";
  messageDeveloper = "full-stack developer";

  showName = '';
  showMessageHello = '';
  showMessageDeveloper = '';
  showButton = false;

  ngOnInit() {
    this.scroll('home');
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

  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
