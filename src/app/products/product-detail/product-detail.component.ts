import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, dots: true };

  slides = [
    { img: 'assets/images/product_img.png' },
    { img: 'assets/images/product_img.png' },
    { img: 'assets/images/product_img.png' },

  ];
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
