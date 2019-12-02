import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even-number',
  template: '<div class="even-number">{{value}}</div>',
  styleUrls: ['../../states/game-control/game-control.component.less']
})
export class EvenComponent implements OnInit {
  @Input() value: number;

  constructor() {}

  ngOnInit() {}
}
