import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantProductMappingComponent } from './merchant-product-mapping.component';

describe('MerchantProductMappingComponent', () => {
  let component: MerchantProductMappingComponent;
  let fixture: ComponentFixture<MerchantProductMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantProductMappingComponent]
    });
    fixture = TestBed.createComponent(MerchantProductMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
