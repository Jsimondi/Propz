import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StoresComponent } from './components/stores/stores.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './landing-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    StoresComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    StoresComponent,
    FooterComponent,
    LandingPageComponent
  ]
})
export class LandingPageModule { }
