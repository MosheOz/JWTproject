import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialUrl = "http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }

  public getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }
  public getSpecial() {
    return this.http.get<any>(this._specialUrl)
  }
}
