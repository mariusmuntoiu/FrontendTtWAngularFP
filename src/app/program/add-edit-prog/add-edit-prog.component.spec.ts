import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProgComponent } from './add-edit-prog.component';

describe('AddEditProgComponent', () => {
  let component: AddEditProgComponent;
  let fixture: ComponentFixture<AddEditProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
