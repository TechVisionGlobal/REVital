import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const HOLIDAY_API_KEY = environment.holidayApiKey;

interface Holiday {
  date: string;
  name: string;
}

@Injectable()
export class AdminService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getIPAddress() {
    return this.httpClient.get<any>("http://ip-api.com/json");
  }

  getHolidays(countryCode: string) {
    return this.httpClient
      .get<{ holidays: Holiday[] }>('https://holidayapi.com/v1/holidays', {
        params: {
          country: countryCode,
          year: String(new Date().getFullYear() - 1),
          key: HOLIDAY_API_KEY,
        },
      })
      .pipe(map((response) => response.holidays));
  }
}
