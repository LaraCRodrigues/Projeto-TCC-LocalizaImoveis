import { TestBed } from '@angular/core/testing';
import { ImoveisCadastradosService } from './imoveis-cadastrados';

describe('ImoveisCadastradosService', () => {

  let service: ImoveisCadastradosService;

  beforeEach(() => {

    TestBed.configureTestingModule({});

    service = TestBed.inject(ImoveisCadastradosService);

  });

  it('should be created', () => {

    expect(service).toBeTruthy();

  });

});