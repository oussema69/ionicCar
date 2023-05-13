/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TacheService } from './tache.service';

describe('Service: Tache', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TacheService]
    });
  });

  it('should ...', inject([TacheService], (service: TacheService) => {
    expect(service).toBeTruthy();
  }));
});
