import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImportModalComponent } from './product-import-modal.component';

describe('ProductImportModalComponent', () => {
  let component: ProductImportModalComponent;
  let fixture: ComponentFixture<ProductImportModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductImportModalComponent]
    });
    fixture = TestBed.createComponent(ProductImportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
