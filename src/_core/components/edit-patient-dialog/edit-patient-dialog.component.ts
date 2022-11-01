import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CancelDialogComponent } from '../cancel-dialog/cancel-dialog.component';
import { DeleteRecordDialogComponent } from '../delete-record-dialog/delete-record-dialog.component';
import { PairDeviceDialogComponent } from '../pair-device-dialog/pair-device-dialog.component';
import { RemoveDeviceDialogComponent } from '../remove-device-dialog/remove-device-dialog.component';
import LoadStatus from '../utils/LoadStatus';

@Component({
  selector: 'app-edit-patient-dialog',
  templateUrl: './edit-patient-dialog.component.html',
  styleUrls: ['./edit-patient-dialog.component.css']
})
export class EditPatientDialogComponent implements OnInit {
  loadStatus: LoadStatus = 'loading';
  isEdit: boolean = false;
  label: string = 'Edit Patient';
  submitting: boolean = false;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  loadData() {
    this.loadStatus = 'loading';

    setTimeout(() => {
      this.loadStatus = 'success';
    }, 2000);
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
  
  removeDevice() {
    this.dialog.open(RemoveDeviceDialogComponent, { panelClass: 'app-full-dialog'});
  }

  edit() {
    this.isEdit = true;
  }

  save() {
    this.submitting = true;
    
    setTimeout(() => {
      this.submitting = false;
      this.snackBar.open('Changes were saved', 'Close')
      this.dialog.closeAll();
    }, 3000);
  }

  cancel() {
    this.dialog.open(CancelDialogComponent, { panelClass: 'app-full-dialog'});
  }

  deleteRecord() {
    this.dialog.open(DeleteRecordDialogComponent, { panelClass: 'app-full-dialog'});
  }

}
