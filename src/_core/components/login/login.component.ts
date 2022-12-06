import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

const DEMO_PARAMS = {
  email: 'admin@revital.com',
  password: 'admin@revital.com',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = DEMO_PARAMS;
  submitting: boolean = false;
  languages = [
    { name: 'English', code: 'en' },
    { name: 'Czechia', code: 'cze' }
  ]
  userLocale: string = 'cze';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserLocale();
  }

  getUserLocale() {
    const userLocale =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;

    if(userLocale)
      this.userLocale = userLocale.split('-')[0];//get language code only
  }

  login(form: NgForm) {
    this.submitting = true;
    
    setTimeout(() => {
      this.submitting = false;
      this.router.navigateByUrl('admin');
    }, 1000);
  }

}
