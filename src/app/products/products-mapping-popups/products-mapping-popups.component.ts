import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { SelectedErpProduct, VendorProductItem } from '../../interfaces/vendor-data';
import { ProductsService } from '../../core/services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-mapping-popups',
  templateUrl: './products-mapping-popups.component.html',
  styleUrls: ['./products-mapping-popups.component.scss']
})
export class ProductsMappingPopupsComponent implements OnInit {
  @Input() popupFlag!: number;
  @Input() ModalName!: string;
  @Input() productId!: number;

  constructor(private ProductsService: ProductsService, private route: ActivatedRoute,) { }
  ModalPropupStatus = "Start Type to search Products"
  modalStatus: boolean = false;
  switch_expression: number | undefined;
  selectedErpProduct!: SelectedErpProduct;
  selectedErpProductforNonErp!: SelectedErpProduct;
  ErpProducWithtNewPrice!: number;
  mainProductData: VendorProductItem = {
    id: 1,
    product_name: "Brass Basin Mixer Tap Aquant",
    product_id: 43,
    updated_at: new Date("2023-08-02T07:44:06.000000Z"),
    sku: "130802-1408",
    erp_tsi_code: "130802",
    price: 21,
    status: 0
  }

  erpproductsData: SelectedErpProduct[] = [];
  mapErpProduct(selectedProduct: SelectedErpProduct) {
    // console.log("selceted product id for Erp product 1",selectedProduct, this.productId, )
    // let obj = {
    //   vendorId:"2", 
    //   price:selectedProduct.price,
    //   erp_product_id:selectedProduct.id, /* erp product id from popup list*/
    //   product_id:this.productId, /* master product id*/
    //   // erp_product_id:number, 
    //   // price:number, product_id:number
    // }
    // console.log(obj);

    this.ProductsService.requestProductMapMerchant("2",selectedProduct.price,selectedProduct.id,this.productId).subscribe((data:any)=>{
      console.log(data);
      // this.ModalPropupStatus = data
    })

  }
  changeProductPrice(selectedPrice: number) {
    console.log("selceted product id New Price", selectedPrice)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['popupFlag']) {
      this.switch_expression = changes['popupFlag'].currentValue;
    }
  }

  productMappingModalToggle(): void {
    this.modalStatus = !this.modalStatus;
  }

 
  getProductsData(keyword: string) {
    this.ProductsService.mappingListProducts(Number(this.route.snapshot.paramMap.get('id')), keyword).subscribe((data: any) => {
      this.erpproductsData = data.result.map((item: any) => {
        return {
          image: item.image,
          title: item.product_name,
          id: item.erp_product_id,
          price: item.price ?? ''
        }
      })
      !this.erpproductsData.length ? this.ModalPropupStatus = "Data Not Found" : this.ModalPropupStatus = ""
    })
  }
  ngOnInit(): void {

  }
}