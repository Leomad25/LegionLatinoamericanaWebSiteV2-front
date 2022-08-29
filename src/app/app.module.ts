import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageComponent } from './shared/image/image.component';
import { BtnComponent } from './shared/btn/btn.component';
import { VideoComponent } from './shared/video/video.component';
import { HomeBackgroundComponent } from './component/home/home-background/home-background.component';
import { HomeComponent } from './component/home/home/home.component';
import { HomeNavTopComponent } from './component/home/home-nav-top/home-nav-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    BtnComponent,
    VideoComponent,
    HomeBackgroundComponent,
    HomeComponent,
    HomeNavTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
