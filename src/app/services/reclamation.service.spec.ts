/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReclamationService } from './reclamation.service';

describe('Service: Reclamation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReclamationService]
    });
  });

  it('should ...', inject([ReclamationService], (service: ReclamationService) => {
    expect(service).toBeTruthy();
  }));
});
