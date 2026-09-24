import { TestBed } from '@angular/core/testing';
import { Atendimentos } from './atendimentos';

describe('Atendimentos', () => {
  let service: Atendimentos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Atendimentos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
