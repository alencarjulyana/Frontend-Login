import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaControleComponent } from './tela-controle.component';

describe('TelaControleComponent', () => {
  let component: TelaControleComponent;
  let fixture: ComponentFixture<TelaControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaControleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
