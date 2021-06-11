import { TestBed } from '@angular/core/testing';

import { TestLoaderv3Service } from './test-loaderv3.service';

describe('TestLoaderv3Service', () => {
  let service: TestLoaderv3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLoaderv3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
