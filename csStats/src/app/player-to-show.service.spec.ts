import { TestBed, inject } from '@angular/core/testing';

import { PlayerToShowService } from './player-to-show.service';

describe('PlayerToShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerToShowService]
    });
  });

  it('should be created', inject([PlayerToShowService], (service: PlayerToShowService) => {
    expect(service).toBeTruthy();
  }));
});
