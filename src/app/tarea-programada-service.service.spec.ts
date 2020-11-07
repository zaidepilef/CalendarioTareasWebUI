import { TestBed } from '@angular/core/testing';

import { TareaProgramadaServiceService } from './tarea-programada-service.service';

describe('TareaProgramadaServiceService', () => {
  let service: TareaProgramadaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaProgramadaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
