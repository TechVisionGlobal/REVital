import { Component, OnInit, ViewChild } from '@angular/core';
import { constants } from 'src/_core/components/utils/consts';
import { countries } from 'src/_core/components/utils/countries';
import LoadStatus from 'src/_core/components/utils/LoadStatus';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  loadStatus: LoadStatus = 'loading';
  timeRange: any[] = [
    { text: '48 hours', isActive: true },
    { text: '14 days', isActive: false },
  ]
  activeRange: any = this.timeRange[0];
  user = {
    email: '',
    phone: { code: '420', value: '' },
  }
  countries = countries;

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loadStatus = 'loading';

    setTimeout(() => {
      this.loadStatus = 'success';
    }, 1000);
  }

  changeLogo() {

  }

  changeRange(range: any) {
    this.loadStatus = 'loading';

    setTimeout(() => {
      this.activeRange = range; 
      this.loadStatus = 'success';
    }, 1000);
  }

  exportCSV() {
    
  }

  validatePhone(event: KeyboardEvent, element: HTMLInputElement) {
    var input = element;
    var oldVal = element.value;
    var pattern = input.getAttribute('pattern')!.toString();
    var regex = new RegExp(pattern, 'g');

    setTimeout(function () {
      var newVal = input.value;
      if (!regex.test(newVal)) {
        input.value = oldVal;
      }
    }, 1);
    
    // const key = parseInt(event.key);

    // const isNumber = isFinite(key);
    // const isBackspace = event.key === constants.BACKSPACE;

    // if(isBackspace)
    //   return;
      
    // if(!isNumber)
    //   return false;

    // return;
  }

}
