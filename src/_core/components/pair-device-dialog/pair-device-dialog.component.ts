import { Component, OnInit } from '@angular/core';
import LoadStatus from '../utils/LoadStatus';

@Component({
  selector: 'app-pair-device-dialog',
  templateUrl: './pair-device-dialog.component.html',
  styleUrls: ['./pair-device-dialog.component.css']
})
export class PairDeviceDialogComponent implements OnInit {
  loadStatus: LoadStatus = 'loading';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadStatus = 'success';
    }, 1000);
  }

  loadData() {
    this.loadStatus = 'loading';

    setTimeout(() => {
      this.loadStatus = 'success';
    }, 2000);
  }

}
