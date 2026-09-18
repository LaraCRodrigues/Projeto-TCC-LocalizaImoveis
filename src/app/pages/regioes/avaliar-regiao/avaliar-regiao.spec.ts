import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvaliarRegiao } from './avaliar-regiao';

describe('AvaliarRegiao', () => {
  let component: AvaliarRegiao;
  let fixture: ComponentFixture<AvaliarRegiao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliarRegiao],
    }).compileComponents();

    fixture = TestBed.createComponent(AvaliarRegiao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
