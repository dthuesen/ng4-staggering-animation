import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),                      // new method with Angular 4.2+

        query(':enter', stagger('100ms', [
          animate('1s ease-in', keyframes([
            style({
              opacity: 0,
              transform: 'translateY(-75px)', // animation starts 35px above zero, so iT's 35px overlapping
              offset: 0
            }),
            style({
              opacity: .5,
              transform: 'translateY(15px)',  // translateY runs over zero to make a swing move
              offset: .3
            }),
            style({
              opacity: 1,
              transform: 'translateY(0px)',  // now it ends right in place
              offset: 1
            }),
          ]))
        ]),
        {optional: true}),

        query(':leave', stagger('200ms', [
          animate('1s ease-in', keyframes([
            style({
              opacity: 1,
              transform: 'translateY(0px)',
              offset: 0
            }),
            style({
              opacity: .5,
              transform: 'translateY(15px)',
              offset: .3
            }),
            style({
              opacity: 0,
              transform: 'translateY(-5px)',
              offset: 1
            }),
          ]))
        ]),
        {optional: true})

      ])
    ]),
    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),     // inital stagger position

        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class AppComponent {

  items = [];

  constructor() {
    this.items = ['This is an item', 'Here is another one', 'This item is awesome!']
  }

  pushItem() {
    this.items.push('Oh well anoter awesome item pushed.');
  }

  removeItem() {
    this.items.pop();
  }

}
