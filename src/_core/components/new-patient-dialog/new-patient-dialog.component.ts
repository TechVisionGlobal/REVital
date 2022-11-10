import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PairDeviceDialogComponent } from '../pair-device-dialog/pair-device-dialog.component';
import LoadStatus from '../utils/LoadStatus';

@Component({
  selector: 'app-new-patient-dialog',
  templateUrl: './new-patient-dialog.component.html',
  styleUrls: ['./new-patient-dialog.component.css']
})
export class NewPatientDialogComponent implements OnInit {
  page = 1;
  loadStatus: LoadStatus = 'loading';
  submitting: boolean = false;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  loadData() {
    this.loadStatus = 'loading';

    setTimeout(() => {
      this.loadStatus = 'success';
    }, 1000);
  }

  increase(element: HTMLInputElement) {
    if (element.valueAsNumber)
      element.valueAsNumber = element.valueAsNumber + 1;
    else
      element.valueAsNumber = 1;
  }
  
  decrease(element: HTMLInputElement) {
    if (element.valueAsNumber && element.valueAsNumber > 1)
      element.valueAsNumber = element.valueAsNumber - 1;
    else
      element.valueAsNumber = 1;
  }

  pairDevice() {
    this.dialog.open(PairDeviceDialogComponent, { panelClass: 'app-full-dialog'});
  }
  
  save() {
    this.submitting = true;
    
    setTimeout(() => {
      this.submitting = false;
      this.snackBar.open('Changes were saved', 'Close')
      this.dialog.closeAll();
    }, 1000);
  }

}
