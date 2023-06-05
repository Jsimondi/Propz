import { Component } from '@angular/core';
import { CarouselObject, LandingPageService } from '../../landing-page.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  carouselIndex: number = 0;
  carouselJSON: any;
  carouselInterval: any;
  carouselDelay: number = 8000; // 8 seconds

  constructor(
    private landingPageService: LandingPageService
  ) {}

  ngOnInit() {
    this.landingPageService.getCarouselJSON().subscribe((jsonObject: CarouselObject[]) => {
      this.carouselJSON = jsonObject;
      this.carouselIndex = 0;

      this.setCarouselInterval();
    })
  }

  setCarouselInterval() {
    this.carouselInterval = setInterval(() => {
      this.carouselIndex = (this.carouselIndex + 1) % 6;
    }, this.carouselDelay)
  }

  destroyCarouselInterval() {
    clearInterval(this.carouselInterval);
  }

  next() {
    this.carouselIndex = (this.carouselIndex + 1) % 6;
    this.destroyCarouselInterval();
    this.setCarouselInterval();
  }

  previous() {
    this.carouselIndex - 1 === -1? 
      this.carouselIndex = 5 :
      this.carouselIndex = this.carouselIndex - 1;
    this.destroyCarouselInterval();
    this.setCarouselInterval();
  }

  ngOnDestroy() {
    this.destroyCarouselInterval();
  }
}
