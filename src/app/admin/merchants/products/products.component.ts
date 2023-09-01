import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  mappingURL = ''
  path:number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
  ){}
  
  setMappingUrl(){
    this.activatedRoute.paramMap.subscribe((data)=>{
      this.path = Number(data.get('id'));

      this.mappingURL = `../../${this.path}/review-product-mapping`
    });
  }

  ngOnInit(): void {
    this.setMappingUrl()
  }
}
