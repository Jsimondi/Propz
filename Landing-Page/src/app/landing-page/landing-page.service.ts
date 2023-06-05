import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LandingPageCarousel {
  type: string;
  content: CarouselObject[];
}

export interface CarouselObject {
  "product-name": string;
  "additional-info": string;
  "imgSrc": string;
  "price": {
      "cash": string;
      "installments": string;
      "installments-with-interest": string;
      "accepted-cards": string[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  private landingPageJSON = "./assets/json/landing-page-products.JSON";
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getCarouselJSON(): Observable<CarouselObject[]> {
    return this.httpClient.get<CarouselObject[]>(this.landingPageJSON)
  }
}
