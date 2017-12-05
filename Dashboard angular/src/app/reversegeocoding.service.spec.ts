import { TestBed, inject } from '@angular/core/testing';

import { ReversegeocodingService } from './reversegeocoding.service';

describe('ReversegeocodingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReversegeocodingService]
    });
  });

  it('should be created', inject([ReversegeocodingService], (service: ReversegeocodingService) => {
    expect(service).toBeTruthy();
  }));
});
