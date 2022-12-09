import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PairDeviceDialogComponent } from '../pair-device-dialog/pair-device-dialog.component';
import { constants } from '../utils/consts';
import { countries } from '../utils/countries';
import LoadStatus from '../utils/LoadStatus';

@Component({
  selector: 'app-new-patient-dialog',
  templateUrl: './new-patient-dialog.component.html',
  styleUrls: ['./new-patient-dialog.component.css']
})
export class NewPatientDialogComponent implements OnInit {
  page = 1;
  pageSize = 15;
  remainder = 15;//pageSize less data from API count
  loadStatus: LoadStatus = 'loading';
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
  ) { }

  ngOnInit(): void {
  }

  loadData() {
    this.loadStatus = 'loading';

    setTimeout(() => {
      this.loadStatus = 'success';
    }, 1000);
  }

  validateHW(event: KeyboardEvent, element: HTMLInputElement) {
    var input = element;
    var oldVal = element.value;
    var pattern = input.getAttribute('pattern')!.toString();
    var regex = new RegExp(pattern, 'g');
    var min = parseFloat(element.getAttribute('min')!.toString());
    var max = parseFloat(element.getAttribute('max')!.toString()); 

    setTimeout(function () {
      var newVal = input.value;
      var newValNumber = parseFloat(input.value);
      if (!regex.test(newVal)) {
        input.value = oldVal;
      }

      if (newValNumber < min) {
        input.value = min.toString();
      }

      if (newValNumber > max) {
        input.value = max.toString();
      }
    }, 1);
  }

  validatePhone(event: KeyboardEvent, element: HTMLInputElement) {
    var input = element;
    var oldVal = element.value;
    var pattern = input.getAttribute('pattern')!.toString();
    var regex = new RegExp(pattern, 'g');

    setTimeout(function () {
      var newVal = input.value;
      if (!regex.test(newVal)) {
        input.value = oldVal;
      }
    }, 1);
  }

  increase(element: HTMLInputElement) {
    const max = parseFloat(element.getAttribute('max')!.toString());

    var oldValue = parseFloat(element.value);

    if (oldValue >= max)
      var newVal = oldValue;
    else
      var newVal = oldValue ? oldValue + 1 : 1;
    
    element.value = newVal.toString();
  }
  
  decrease(element: HTMLInputElement) {
    const min = parseFloat(element.getAttribute('min')!.toString());

    var oldValue = parseFloat(element.value);

    if (oldValue <= min)
      var newVal = oldValue;
    else
      var newVal = oldValue ? oldValue - 1 : 1;
    
    element.value = newVal.toString();
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
  
  save() {
    this.submitting = true;
    
    setTimeout(() => {
      this.submitting = false;
      this.snackBar.open('Changes were saved', 'Close')
      this.dialog.closeAll();
    }, 1000);
  }

}
