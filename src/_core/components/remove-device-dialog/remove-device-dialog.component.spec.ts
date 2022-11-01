import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDeviceDialogComponent } from './remove-device-dialog.component';

describe('RemoveDeviceDialogComponent', () => {
  let component: RemoveDeviceDialogComponent;
  let fixture: ComponentFixture<RemoveDeviceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDeviceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveDeviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
