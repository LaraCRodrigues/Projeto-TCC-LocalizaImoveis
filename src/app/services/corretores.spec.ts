import { TestBed } from '@angular/core/testing';
import { Corretores } from './corretores';

describe('Corretores', () => {
  let service: Corretores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Corretores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
