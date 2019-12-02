import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd-number',
  template: '<div class="odd-number">{{value}}</div>',
  styleUrls: ['../../states/game-control/game-control.component.less']
})
export class OddComponent implements OnInit {
  @Input() value: number;

  constructor() {}

  ngOnInit() {}
}
