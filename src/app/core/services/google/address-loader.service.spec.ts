import { TestBed } from '@angular/core/testing';

import { AddressLoaderService } from './address-loader.service';

describe('AddressLoaderService', () => {
  let service: AddressLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
