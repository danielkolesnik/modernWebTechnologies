import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subscription, interval} from 'rxjs';
import random from 'random';

@Injectable({
  providedIn: 'root'
})
export class InfineNumberGeneratorService {
  private even = new BehaviorSubject([]);
  private odd = new BehaviorSubject([]);
  private subscription: Subscription;

  setEvenNumbers(state: Array<number>) {
    this.even.next(state);
  }

  getEvenNumbers(): BehaviorSubject<Array<number>> {
    return this.even;
  }

  setOddNumbers(state: Array<number>) {
    this.odd.next(state);
  }

  getOddNumbers(): BehaviorSubject<Array<number>> {
    return this.odd;
  }

  activate() {
    this.subscription = interval(1000)
      .subscribe(val => {
        const nextNumber = random.int(1, 1000);
        if (nextNumber % 2) {
          this.odd.next([...this.odd.getValue(), nextNumber]);
          console.log(this.odd.getValue());
        } else {
          this.even.next([...this.even.getValue(), nextNumber]);
          console.log(this.even.getValue());
        }
      });
  }

  deactivate() {
    try {
      this.subscription.unsubscribe();
    } catch (e) {
      console.error('NOTE: You should activate service before deactivation.');
    }
  }
}
