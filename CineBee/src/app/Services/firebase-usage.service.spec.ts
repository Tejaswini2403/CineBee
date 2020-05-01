import { TestBed } from '@angular/core/testing';

import { FirebaseUsageService } from './firebase-usage.service';

describe('FirebaseUsageService', () => {
  let service: FirebaseUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
