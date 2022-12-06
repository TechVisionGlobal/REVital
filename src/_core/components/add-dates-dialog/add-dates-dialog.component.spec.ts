import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDatesDialogComponent } from './add-dates-dialog.component';

describe('AddDatesDialogComponent', () => {
  let component: AddDatesDialogComponent;
  let fixture: ComponentFixture<AddDatesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDatesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDatesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
