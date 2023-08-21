import { Component, Input, SimpleChanges } from '@angular/core';
import { SelectedErpProduct, VendorProductItem } from '../../interfaces/vendor-data';

@Component({
  selector: 'app-products-mapping-popups',
  templateUrl: './products-mapping-popups.component.html',
  styleUrls: ['./products-mapping-popups.component.scss']
})
export class ProductsMappingPopupsComponent {

  @Input() popupFlag!:number;
  modalStatus: boolean = false;
  switch_expression:number | undefined;

  selectedErpProduct!: SelectedErpProduct;

  selectedErpProductforNonErp! :SelectedErpProduct;

  ErpProducWithtNewPrice! : number;

  mainProductData :VendorProductItem =
  { 
      id :1,
      product_name :"Brass Basin Mixer Tap Aquant", 
      product_id: 43, 
      updated_at : new Date("2023-08-02T07:44:06.000000Z"), 
      sku :"130802-1408", 
      erp_tsi_code :"130802", 
      price :21,
      status :0 
  }
  

  erpproductsData:SelectedErpProduct[] = [
    {
      image:'/assets/images/product-image.jpg',
      title:"Brass Basin Mixer Tap Aquant",
      id:1,
      price:24
    },
    {
      image:'/assets/images/product-image.jpg',
      title:"Yellow Armoured Cable MC Wire",
      id:2,
      price:46
    },
    {
      image:'/assets/images/product-image.jpg',
      title:"Brass Basin Mixer Tap Aquant",
      id:3,
      price:34
    },
    {
      image:'/assets/images/product-image.jpg',
      title:"Yellow Armoured Cable MC Wire",
      id:4, 
      price:24

    }
  ] 
  maperpproduct( selectedProduct : SelectedErpProduct){
    console.log("selceted product id for Erp product",selectedProduct)
  }
  changeProductPrice(selectedPrice : number){
    console.log("selceted product id New Price", selectedPrice)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['popupFlag'] ) {
      this.switch_expression =changes['popupFlag'].currentValue;
    }
  }
  
  productMappingModalToggle(): void {
    this.modalStatus = !this.modalStatus; 
  }
}
