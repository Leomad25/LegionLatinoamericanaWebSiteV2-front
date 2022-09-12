import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ImageComponent } from './shared/image/image.component';
import { BtnComponent } from './shared/btn/btn.component';
import { VideoComponent } from './shared/video/video.component';
import { HomeBackgroundComponent } from './component/home/home-background/home-background.component';
import { HomeComponent } from './component/home/home/home.component';
import { HomeNavTopComponent } from './component/home/home-nav-top/home-nav-top.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeNavLoginButtonComponent } from './component/home/home-nav-login-button/home-nav-login-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeBodyMainComponent } from './component/home/home-boby/home-body-main/home-body-main.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    BtnComponent,
    VideoComponent,
    HomeBackgroundComponent,
    HomeComponent,
    HomeNavTopComponent,
    HomePageComponent,
    AuthPageComponent,
    PageNotFoundComponent,
    HomeNavLoginButtonComponent,
    HomeBodyMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
