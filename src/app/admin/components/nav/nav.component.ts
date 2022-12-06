import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  items = [
    {
      text: 'Dashboard',
      routerLink: '/admin',
      exactPath: true,
    },
    {
      text: 'Patients',
      routerLink: '/admin/patients',
    },
    {
      text: 'Scheduling',
      routerLink: '/admin/scheduling',
    },
    {
      text: 'Settings',
      routerLink: '/admin/settings',
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 1000);
  }

}
