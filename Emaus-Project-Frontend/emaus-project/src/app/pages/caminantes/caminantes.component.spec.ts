import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminantesComponent } from './caminantes.component';

describe('CaminantesComponent', () => {
  let component: CaminantesComponent;
  let fixture: ComponentFixture<CaminantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
