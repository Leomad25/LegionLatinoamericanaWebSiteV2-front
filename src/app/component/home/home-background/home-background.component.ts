import { Component, OnInit } from '@angular/core';
import { Video } from '../../../model/shared/video';

@Component({
  selector: 'app-home-background',
  templateUrl: './home-background.component.html',
  styleUrls: ['./home-background.component.scss']
})
export class HomeBackgroundComponent implements OnInit {

  //backgroundVideo: Video | null = null;
  backgroundVideo: Video | null = {
    path: "/assets/video/presentation.mp4",
    alternative: "/assets/image/presentation.jpg",
    enableMuted: true,
    enableAutoPlay: true,
    enableLoop: true,
    enablePickToPick: false
  };

  constructor() { }

  ngOnInit(): void {
  }
}
