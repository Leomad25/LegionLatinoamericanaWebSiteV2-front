import { Component, Input, OnInit } from '@angular/core';
import { Btn } from '../../model/shared/btn';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() btnInput: Btn | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
