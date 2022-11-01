import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientsComponent } from './components/patients/patients.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'scheduling', component: SchedulingComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    HttpClientModule,
  ]
})
export class AdminRoutingModule { }
