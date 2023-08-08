import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCaminanteComponent } from './add-edit-caminante.component';

describe('AddEditCaminanteComponent', () => {
  let component: AddEditCaminanteComponent;
  let fixture: ComponentFixture<AddEditCaminanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCaminanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCaminanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
