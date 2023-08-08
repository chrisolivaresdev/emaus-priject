import { TestBed } from '@angular/core/testing';

import { CaminantesService } from './caminantes.service';

describe('CaminantesService', () => {
  let service: CaminantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaminantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
