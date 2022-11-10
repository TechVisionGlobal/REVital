import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import LoadStatus from 'src/_core/components/utils/LoadStatus';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuclick = new EventEmitter();
  loadStatus: LoadStatus = 'loading';

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
