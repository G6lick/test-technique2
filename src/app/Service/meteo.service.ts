import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
let urlApi = "http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=acc2caec8e1294a40424dde232848027";
@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }
  getInfosMeteo()
  {
    return this.http.get(urlApi);
  }
}
