import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Auth } from 'src/app/enum';

@Component({
  selector: 'app-home-nav-login-button',
  templateUrl: './home-nav-login-button.component.html',
  styleUrls: ['./home-nav-login-button.component.scss']
})
export class HomeNavLoginButtonComponent implements OnInit {

  @Output() onButtonClick = new EventEmitter();

  stringsAuth = Auth;

  constructor() {}

  ngOnInit(): void {
  }

  onButtonClickAction() {
    this.onButtonClick.emit();
  }

}

