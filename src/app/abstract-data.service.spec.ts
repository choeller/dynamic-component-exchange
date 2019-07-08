import { TestBed } from '@angular/core/testing';

import { AbstractDataService } from './abstract-data.service';

describe('AbstractDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractDataService = TestBed.get(AbstractDataService);
    expect(service).toBeTruthy();
  });
});
