import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditServidorComponent } from './add-edit-servidor.component';

describe('AddEditServidorComponent', () => {
  let component: AddEditServidorComponent;
  let fixture: ComponentFixture<AddEditServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditServidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
