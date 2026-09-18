import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesRegioes } from './detalhes-regioes';

describe('DetalhesRegioes', () => {
  let component: DetalhesRegioes;
  let fixture: ComponentFixture<DetalhesRegioes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesRegioes],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesRegioes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
