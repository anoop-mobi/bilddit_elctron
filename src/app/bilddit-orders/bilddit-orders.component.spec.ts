import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BildditOrdersComponent } from './bilddit-orders.component';

describe('BildditOrdersComponent', () => {
  let component: BildditOrdersComponent;
  let fixture: ComponentFixture<BildditOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BildditOrdersComponent]
    });
    fixture = TestBed.createComponent(BildditOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
