import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRequestDetailComponent } from './order-request-detail.component';

describe('OrderRequestDetailComponent', () => {
  let component: OrderRequestDetailComponent;
  let fixture: ComponentFixture<OrderRequestDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderRequestDetailComponent]
    });
    fixture = TestBed.createComponent(OrderRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
