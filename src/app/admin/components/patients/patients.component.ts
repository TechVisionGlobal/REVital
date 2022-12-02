import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPatientDialogComponent } from 'src/_core/components/edit-patient-dialog/edit-patient-dialog.component';
import { NewPatientDialogComponent } from 'src/_core/components/new-patient-dialog/new-patient-dialog.component';
import { constants } from 'src/_core/components/utils/consts';
import LoadStatus from 'src/_core/components/utils/LoadStatus';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  page = 1;
  loadStatus: LoadStatus = 'loading';
  patients = [
    {fullName: 'Karel Novak', firstName: 'Karel', middleName: null, surName: 'Novak', patientId: '655dfn4ds554', age: 69, avgFalls: 1, avgHR: 68, avg02: 98, lastEventDate: '05.10.2022', lastEventType: 'Fall'  },
    {fullName: 'Maria Semanova', firstName: 'Maria', middleName: null, surName: 'Semanova', patientId: '354hrtd354k4g', age: 69, avgFalls: 1, avgHR: 68, avg02: 98, lastEventDate: '05.10.2022', lastEventType: 'Fall'  },
    {fullName: 'Kim Tang', firstName: 'Kim', middleName: null, surName: 'Tang', patientId: '15gfh47hgxd', age: 69, avgFalls: 1, avgHR: 68, avg02: 98, lastEventDate: '05.10.2022', lastEventType: 'Fall'  },
    {fullName: 'Tara Marin', firstName: 'Tara', middleName: null, surName: 'Marin', patientId: '587gsw74erds2', age: 69, avgFalls: 1, avgHR: 68, avg02: 98, lastEventDate: '05.10.2022', lastEventType: 'Fall'  },
    {fullName: 'Oleg Markov', firstName: 'Oleg', middleName: null, surName: 'Markov', patientId: '5756fdgsdgjy', age: 69, avgFalls: 1, avgHR: 68, avg02: 98, lastEventDate: '05.10.2022', lastEventType: 'Fall'  },
  ]
  searchValue: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
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

  addNewPatient() {
    this.dialog.open(NewPatientDialogComponent);
  }
  
  editPatient(patient: any) {
    this.dialog.open(EditPatientDialogComponent, {data: patient});
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

}
