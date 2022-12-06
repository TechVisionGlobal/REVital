import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CancelDialogComponent } from '../cancel-dialog/cancel-dialog.component';
import { DeleteRecordDialogComponent } from '../delete-record-dialog/delete-record-dialog.component';
import { PairDeviceDialogComponent } from '../pair-device-dialog/pair-device-dialog.component';
import { RemoveDeviceDialogComponent } from '../remove-device-dialog/remove-device-dialog.component';
import { constants } from '../utils/consts';
import { countries } from '../utils/countries';
import LoadStatus from '../utils/LoadStatus';

@Component({
  selector: 'app-edit-patient-dialog',
  templateUrl: './edit-patient-dialog.component.html',
  styleUrls: ['./edit-patient-dialog.component.css']
})
export class EditPatientDialogComponent implements OnInit {
  page = 1;
  loadStatus: LoadStatus = 'loading';
  isEdit: boolean = false;
  label: string = 'Edit Patient';
  submitting: boolean = false;
  patient = {
    firstName: '',
    lastName: '',
    email: '',
    phone: { code: '420', value: '' },
    nextOfKinEmail: '',
    nextOfKinPhone: { code: '420', value: '' },
  }
  countries = countries;

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
    }, 1000);
  }

  validateAge(event: KeyboardEvent, element: HTMLInputElement) {
    const min = parseFloat(element.getAttribute('min')!.toString());
    const max = parseFloat(element.getAttribute('max')!.toString()); 
    const key = parseInt(event.key);
    const value = element.value;
    const newValue = parseFloat(`${value}${key}`);
    
    const isNumber = isFinite(key);
    const isZero = event.key === constants.ZERO;
    const isBackspace = event.key === constants.BACKSPACE;

    if(isBackspace)
      return;

    if(!value.length && isZero)
      return false;
      
    if(!isNumber)
      return false;

    if (newValue < min || newValue > max)
      return false;

    return;
  }

  validatePhone(event: KeyboardEvent) {
    const key = parseInt(event.key);

    const isNumber = isFinite(key);
    const isBackspace = event.key === constants.BACKSPACE;

    if(isBackspace)
      return;
      
    if(!isNumber)
      return false;

    return;
  }

  increase(element: HTMLInputElement) {
    const max = parseFloat(element.getAttribute('max')!.toString());

    var oldValue = element.valueAsNumber;

    if (oldValue >= max)
      var newVal = oldValue;
    else
      var newVal = element.valueAsNumber ? element.valueAsNumber + 1 : 1;
    
    element.valueAsNumber = newVal;
  }
  
  decrease(element: HTMLInputElement) {
    const min = parseFloat(element.getAttribute('min')!.toString());

    var oldValue = element.valueAsNumber;
    
    if (oldValue <= min)
      var newVal = oldValue;
    else
      var newVal = element.valueAsNumber ? element.valueAsNumber - 1 : 1;
    
    element.valueAsNumber = newVal;
  }

  onDateFocus(element: HTMLInputElement) {
    element.type ='date';
  }
  
  onDateBlur(element: HTMLInputElement) {
    if(element.value)
      element.type ='date';
    else
      element.type='text';
  }

  pairDevice() {
    this.dialog.open(PairDeviceDialogComponent);
  }
  
  removeDevice() {
    this.dialog.open(RemoveDeviceDialogComponent);
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
    }, 1000);
  }

  cancel() {
    this.dialog.open(CancelDialogComponent);
  }

  deleteRecord() {
    this.dialog.open(DeleteRecordDialogComponent);
  }

}
