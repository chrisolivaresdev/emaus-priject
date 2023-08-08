import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServidorByRetiroComponent } from './view-servidor-by-retiro.component';

describe('ViewServidorByRetiroComponent', () => {
  let component: ViewServidorByRetiroComponent;
  let fixture: ComponentFixture<ViewServidorByRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServidorByRetiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewServidorByRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
