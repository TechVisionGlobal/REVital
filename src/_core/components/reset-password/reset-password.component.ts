import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

const DEMO_PARAMS = {
  email: 'admin@revital.com',
  password: 'admin@revital.com',
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  user = DEMO_PARAMS;
  submitting: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    this.submitting = true;
    
    setTimeout(() => {
      this.submitting = false;
      this.router.navigateByUrl('admin');
    }, 3000);
  }

}
