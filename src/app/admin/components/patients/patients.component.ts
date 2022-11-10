import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPatientDialogComponent } from 'src/_core/components/edit-patient-dialog/edit-patient-dialog.component';
import { NewPatientDialogComponent } from 'src/_core/components/new-patient-dialog/new-patient-dialog.component';
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

  addNewPatient() {
    this.dialog.open(NewPatientDialogComponent, { panelClass: 'app-full-dialog'});
  }
  
  editPatient(patient: any) {
    this.dialog.open(EditPatientDialogComponent, { panelClass: 'app-full-dialog', data: patient});
  }

}
