import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import LoadStatus from 'src/_core/components/utils/LoadStatus';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loadStatus: LoadStatus = 'loading';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  timeRange: any[] = [
    { text: '48 hours', isActive: true },
    { text: '14 days', isActive: false },
  ]
  activeRange: any = this.timeRange[0];

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loadStatus = 'loading';

    setTimeout(() => {
      this.loadStatus = 'success';
    }, 2000);
  }

  changeRange(range: any) {
    this.loadStatus = 'loading';

    setTimeout(() => {
      this.activeRange = range; 
      this.loadStatus = 'success';
    }, 2000);
  }

}
