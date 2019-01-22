import { TestBed, inject } from '@angular/core/testing';

import { CompareStatsService } from './compare-stats.service';

describe('CompareStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompareStatsService]
    });
  });

  it('should be created', inject([CompareStatsService], (service: CompareStatsService) => {
    expect(service).toBeTruthy();
  }));
});
