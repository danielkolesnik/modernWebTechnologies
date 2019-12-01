import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  show = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.show = !this.show;
  }

  closeOnTransit() {
    if (this.show) {
      this.show = false;
    }
  }

}
