import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComponentsComponent } from './add-edit-components.component';

describe('AddEditComponentsComponent', () => {
  let component: AddEditComponentsComponent;
  let fixture: ComponentFixture<AddEditComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
