import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaRegioes } from './lista-regioes';

describe('ListaRegioes', () => {
  let component: ListaRegioes;
  let fixture: ComponentFixture<ListaRegioes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRegioes],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaRegioes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
