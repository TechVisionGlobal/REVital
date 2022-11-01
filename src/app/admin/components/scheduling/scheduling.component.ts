// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { CalendarEvent, CalendarView } from 'angular-calendar';
// import { startOfYear, subYears } from 'date-fns';
// import { environment } from 'src/environments/environment';
// import LoadStatus from 'src/_core/components/utils/LoadStatus';
// import { AdminService } from '../../services/admin.service';

// const HOLIDAY_API_KEY = environment.holidayApiKey;

// interface Holiday {
//   date: string;
//   name: string;
// }

// type CalendarEventWithMeta = CalendarEvent<{ type: 'holiday'; holiday: Holiday } | { type: 'normal' }>;

// @Component({
//   selector: 'app-scheduling',
//   templateUrl: './scheduling.component.html',
//   styleUrls: ['./scheduling.component.css']
// })
// export class SchedulingComponent implements OnInit {
//   loadStatus: LoadStatus = 'loading';
//   view: CalendarView = CalendarView.Month;
//   viewDate = startOfYear(subYears(new Date(), 1));
//   events: CalendarEventWithMeta[] = [];
//   countryCode: any;

//   constructor(
//     private httpClient: HttpClient,
//     private adminService: AdminService,
//   ) { }

//   ngOnInit(): void {
//     this.getIPAddress();
//     this.loadData();
//   }

//   loadData() {
//     this.loadStatus = 'loading';

//     setTimeout(() => {
//       this.loadStatus = 'success';
//     }, 2000);
//   }

//   getIPAddress() {
//     this.adminService.getIPAddress().subscribe((result: any) => {
//       this.getHolidays(result.countryCode);
//     })
//   }

//   getHolidays(countryCode: string) {
//     this.adminService.getHolidays(countryCode).subscribe((holidays) => {
//         this.events = holidays.map((holiday) => {
//           return {
//             start: new Date(holiday.date),
//             title: holiday.name,
//             allDay: true,
//             meta: {
//               type: 'holiday',
//               holiday,
//             },
//           };
//         });
//         // this.cdr.markForCheck();
//       });
//   }

//   increase(element: HTMLInputElement) {
//     if (element.valueAsNumber)
//       element.valueAsNumber = element.valueAsNumber + 1;
//     else
//       element.valueAsNumber = 1;
//   }
  
//   decrease(element: HTMLInputElement) {
//     if (element.valueAsNumber && element.valueAsNumber > 1)
//       element.valueAsNumber = element.valueAsNumber - 1;
//     else
//       element.valueAsNumber = 1;
//   }

// }


import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { AdminService } from '../../services/admin.service';
import LoadStatus from 'src/_core/components/utils/LoadStatus';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-scheduling',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {
  loadStatus: LoadStatus = 'success';
  // @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: { ...colors['red'] },
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: { ...colors['yellow'] },
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: { ...colors['blue'] },
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  activeDayIsOpen: boolean = true;

  // constructor(
  //   private modal: NgbModal
  // ) {}

  constructor(
    private adminService: AdminService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    // this.getIPAddress();
    // this.loadData();
  }

  loadData() {
    this.loadStatus = 'loading';

    setTimeout(() => {
      this.loadStatus = 'success';
    }, 2000);
  }

  getIPAddress() {
    this.adminService.getIPAddress().subscribe((result: any) => {
      this.getHolidays(result.countryCode);
    })
  }

  getHolidays(countryCode: string) {
    this.adminService.getHolidays(countryCode).subscribe((holidays) => {
      this.events = holidays.map((holiday) => {
        return {
          start: new Date(holiday.date),
          title: holiday.name,
          allDay: true,
          meta: {
            type: 'holiday',
            holiday,
          },
        };
      });
      this.cdr.markForCheck();
    });
  }

  increase(element: HTMLInputElement) {
    if (element.valueAsNumber)
      element.valueAsNumber = element.valueAsNumber + 1;
    else
      element.valueAsNumber = 1;
  }

  decrease(element: HTMLInputElement) {
    if (element.valueAsNumber && element.valueAsNumber > 1)
      element.valueAsNumber = element.valueAsNumber - 1;
    else
      element.valueAsNumber = 1;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  addDate() {
    
  }
}
