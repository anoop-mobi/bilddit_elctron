import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  mappingURL:string = ''
  path:number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
  ){}
  
  setMappingUrl(){
    this.activatedRoute.paramMap.subscribe((data)=>{
      this.path = Number(data.get('id'));

      this.mappingURL = '../../review-product-mapping/' + this.path
    });
  }

  ngOnInit(): void {
    this.setMappingUrl()
  }
}
