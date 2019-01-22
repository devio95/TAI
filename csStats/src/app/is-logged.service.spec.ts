import { TestBed, inject } from '@angular/core/testing';

import { IsLoggedService } from './is-logged.service';

describe('IsLoggedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoggedService]
    });
  });

  it('should be created', inject([IsLoggedService], (service: IsLoggedService) => {
    expect(service).toBeTruthy();
  }));
});
