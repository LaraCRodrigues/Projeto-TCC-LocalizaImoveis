import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Regioes } from './regioes';

describe('Regioes', () => {
  let component: Regioes;
  let fixture: ComponentFixture<Regioes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Regioes],
    }).compileComponents();

    fixture = TestBed.createComponent(Regioes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
