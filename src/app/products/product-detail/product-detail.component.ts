import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  panelOpenState = false;
  slides = [
    { img: 'assets/images/product_img.png' },
    { img: 'assets/images/product_img.png' },
    { img: 'assets/images/product_img.png' },

  ];
}
