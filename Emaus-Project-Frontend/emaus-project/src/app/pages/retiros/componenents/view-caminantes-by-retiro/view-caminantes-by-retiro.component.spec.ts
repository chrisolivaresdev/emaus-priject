import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCaminantesByRetiroComponent } from './view-caminantes-by-retiro.component';

describe('ViewCaminantesByRetiroComponent', () => {
  let component: ViewCaminantesByRetiroComponent;
  let fixture: ComponentFixture<ViewCaminantesByRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCaminantesByRetiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCaminantesByRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
