import { TestBed } from '@angular/core/testing';

import { BuildWatchReproLibService } from './build-watch-repro-lib.service';

describe('BuildWatchReproLibService', () => {
  let service: BuildWatchReproLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildWatchReproLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
