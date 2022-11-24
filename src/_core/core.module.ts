import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { NewPatientDialogComponent } from './components/new-patient-dialog/new-patient-dialog.component';
import { PairDeviceDialogComponent } from './components/pair-device-dialog/pair-device-dialog.component';
import { EditPatientDialogComponent } from './components/edit-patient-dialog/edit-patient-dialog.component';
import { RemoveDeviceDialogComponent } from './components/remove-device-dialog/remove-device-dialog.component';
import { DeleteRecordDialogComponent } from './components/delete-record-dialog/delete-record-dialog.component';
import { CancelDialogComponent } from './components/cancel-dialog/cancel-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDatesDialogComponent } from './components/add-dates-dialog/add-dates-dialog.component';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';



@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    NewPatientDialogComponent,
    PairDeviceDialogComponent,
    EditPatientDialogComponent,
    RemoveDeviceDialogComponent,
    DeleteRecordDialogComponent,
    CancelDialogComponent,
    AddDatesDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTrimDirectiveModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class CoreModule { }
