import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'mission 1', date: '2020-10-23' },
      { title: 'mission 2', date: '2020-10-23' },
      { title: 'mission 3', date: '2020-10-24' },
    ]
  };

  @ViewChild("fullcalendar") fullcalendar: CalendarComponent;
  @ViewChild("livreur") livreur: ElementRef;
  @ViewChild("moto") moto: ElementRef;
  @ViewChild("adress") adress: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

}
