import { Component, OnInit } from '@angular/core';
import { General, Urls } from 'src/app/enum';

@Component({
  selector: 'app-home-nav-top',
  templateUrl: './home-nav-top.component.html',
  styleUrls: ['./home-nav-top.component.scss']
})
export class HomeNavTopComponent implements OnInit {

  strings = General;
  links = Urls;

  statusNavList: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLoginButtonClick(): void {

  }

  onHoverNavTop(action: string): void {
    if (action === 'in') {
      this.statusNavList = true;
      return;
    }
    this.statusNavList = false;
  }
}