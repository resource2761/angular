import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
     SidenavListComponent
  ],
  imports: [
    BrowserModule, RouterModule,CarouselModule,SwiperModule, MaterialModule,
    AppRoutingModule, BrowserAnimationsModule, //DeviceDetectorService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
