import { TestBed } from '@angular/core/testing';

import { ListMerchantsService } from './list-merchants.service';

describe('ListMerchantsService', () => {
  let service: ListMerchantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMerchantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
