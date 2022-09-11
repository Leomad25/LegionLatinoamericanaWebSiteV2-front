import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() imagePath: string | null = null;
  @Input() fixedWidth: boolean = true;
  imageNotFound: boolean = false;
  imageAltNotFound: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onImageNotFound() {
    this.imageNotFound = true;
  }

  onImageAltNotFound() {
    this.imageAltNotFound = true;
  }
}
