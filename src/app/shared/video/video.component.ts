import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../model/shared/video'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() videoSettings: Video | null = null;
  videosEnable: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onError(): void {
    this.videosEnable = false;
  }
}
