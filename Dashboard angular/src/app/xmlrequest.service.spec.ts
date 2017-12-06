import { TestBed, inject } from '@angular/core/testing';

import { XmlrequestService } from './xmlrequest.service';

describe('XmlrequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlrequestService]
    });
  });

  it('should be created', inject([XmlrequestService], (service: XmlrequestService) => {
    expect(service).toBeTruthy();
  }));
});
