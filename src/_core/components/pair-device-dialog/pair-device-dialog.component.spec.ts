import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairDeviceDialogComponent } from './pair-device-dialog.component';

describe('PairDeviceDialogComponent', () => {
  let component: PairDeviceDialogComponent;
  let fixture: ComponentFixture<PairDeviceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairDeviceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairDeviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
