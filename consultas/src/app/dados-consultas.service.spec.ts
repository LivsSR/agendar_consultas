import { TestBed } from '@angular/core/testing';

import { DadosConsultasService } from './dados-consultas.service';

describe('DadosConsultasService', () => {
  let service: DadosConsultasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosConsultasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
