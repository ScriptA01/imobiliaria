import { TestBed } from '@angular/core/testing';

import { ServicesqlistService } from './servicesqlist.service';

describe('ServicesqlistService', () => {
  let service: ServicesqlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesqlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
