import { Component, OnInit } from '@angular/core';
import {InfineNumberGeneratorService} from '../../services/infine-number-generator.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.less']
})
export class GameControlComponent implements OnInit {

  private isInitialized = false;

  constructor(public numberGenerator: InfineNumberGeneratorService) {}

  ngOnInit() {}

  start() {
    this.numberGenerator.activate();
    this.isInitialized = true;
  }

  stop() {
    this.numberGenerator.deactivate();
  }

  clear() {
    this.numberGenerator.setEvenNumbers([]);
    this.numberGenerator.setOddNumbers([]);
  }
}
