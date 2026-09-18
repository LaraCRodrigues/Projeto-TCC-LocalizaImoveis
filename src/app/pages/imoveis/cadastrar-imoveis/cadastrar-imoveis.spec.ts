import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarImoveis } from './cadastrar-imoveis';

describe('CadastrarImoveis', () => {
  let component: CadastrarImoveis;
  let fixture: ComponentFixture<CadastrarImoveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarImoveis],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarImoveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
