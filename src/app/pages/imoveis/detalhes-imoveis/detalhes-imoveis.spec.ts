import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesImoveis } from './detalhes-imoveis';

describe('DetalhesImoveis', () => {
  let component: DetalhesImoveis;
  let fixture: ComponentFixture<DetalhesImoveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesImoveis],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesImoveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
