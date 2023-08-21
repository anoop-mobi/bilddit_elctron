import { Component } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-product-import-modal',
  templateUrl: './product-import-modal.component.html',
  styleUrls: ['./product-import-modal.component.scss']
})
export class ProductImportModalComponent {
  importModalStatus: boolean = false;
  selectedFile: File | undefined;
  productUploadedStatus:string = '';
  selectedFilepath: string = '';

  importModalToggle(): void {
    this.importModalStatus = !this.importModalStatus; 
    // this.productUploadedStatus = '';
  }
  constructor(public products:ProductsService){}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  uploadProducts(data: any) {

    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('vendor_id', "2");
    
      
    this.products.importVendorProducts(formData).subscribe((result: any) => {
      console.log(result);
      this.productUploadedStatus = result.body.message;
    });
   
  }
}
