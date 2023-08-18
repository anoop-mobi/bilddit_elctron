import { TestBed } from '@angular/core/testing';

import { MerchantsDetailsService } from './merchants-details.service';

describe('MerchantsDetailsService', () => {
  let service: MerchantsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
