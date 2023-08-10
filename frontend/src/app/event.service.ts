import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  private SERVER_URL: String = 'http://localhost:3001/'

  getEventList() {
    return this.http.get(this.SERVER_URL + 'events')
  }

  createEvent(newEvent: Event) {
    return this.http.post(this.SERVER_URL + 'createEvent', newEvent)
  }

  searchEvent(searchParam: String) {
    return this.http.get(this.SERVER_URL + `search/${searchParam}`);
  }

}
