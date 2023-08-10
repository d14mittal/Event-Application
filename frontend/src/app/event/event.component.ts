import { Component, OnInit } from '@angular/core'
import { EventService } from '../event.service'
import { Event } from '../event'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor(private eventService: EventService) {}

  eventList: any = [];

  event: Event = {
    name: '',
    host: '',
    date: new Date(),
    location: '',
  };

  searchParam: String = ''

  ngOnInit(): void {
    this.getEventList()
  }

  getEventList() {
    this.eventService.getEventList().subscribe(responseData => {
      this.eventList = responseData
      console.log('This is the response data: ', responseData)
    })
  }

  createEvent() {
    this.eventService.createEvent(this.event).subscribe(responseData => {
      console.log('This is the response data: ', responseData)
      this.getEventList()
    });
  }

  searchEvent() {
    this.eventService
      .searchEvent(this.searchParam)
      .subscribe(responseData => {
        console.log('This is the response data: ', responseData)
        if (responseData) {
          this.eventList = responseData
        } else {
          console.log('Error occurred')
        }
      })
  }
}
