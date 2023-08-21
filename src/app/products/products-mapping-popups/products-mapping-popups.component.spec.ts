import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMappingPopupsComponent } from './products-mapping-popups.component';

describe('ProductsMappingPopupsComponent', () => {
  let component: ProductsMappingPopupsComponent;
  let fixture: ComponentFixture<ProductsMappingPopupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsMappingPopupsComponent]
    });
    fixture = TestBed.createComponent(ProductsMappingPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
