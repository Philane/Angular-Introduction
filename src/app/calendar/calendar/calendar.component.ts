import { Component, OnInit } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-calendar',
  //template:`<ejs-schedule width='1500px' height='550px' [selectedDate]='selectedDate' ></ejs-schedule>`,
  //templateUrl: './calendar.component.html',
  template: `<ejs-schedule width='1500px' height='550px' [selectedDate]='selectedDate' [eventSettings]='eventSettings'></ejs-schedule>`,
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public selectedDate: Date = new Date(2018, 1, 15);
  constructor() { }
  public eventSettings: EventSettingsModel = {
    dataSource: [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2018, 1, 15, 9, 30),
        EndTime: new Date(2018, 1, 15, 11, 0)
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2018, 1, 12, 12, 0),
        EndTime: new Date(2018, 1, 12, 14, 0)
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2018, 1, 13, 9, 30),
        EndTime: new Date(2018, 1, 13, 11, 0)
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30)
    }]
};

  ngOnInit() {
  }

}
