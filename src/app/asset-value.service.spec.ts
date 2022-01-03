import { TestBed } from '@angular/core/testing';

import { AssetValueService } from './asset-value.service';

describe('AssetValueService', () => {
  let service: AssetValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
