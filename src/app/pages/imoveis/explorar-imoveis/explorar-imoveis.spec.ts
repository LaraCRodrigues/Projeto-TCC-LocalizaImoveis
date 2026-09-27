import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExplorarImoveis } from './explorar-imoveis';

describe('ExplorarImoveis', () => {
  let component: ExplorarImoveis;
  let fixture: ComponentFixture<ExplorarImoveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorarImoveis],
    }).compileComponents();

    fixture = TestBed.createComponent(ExplorarImoveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
