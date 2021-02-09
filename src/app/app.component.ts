import { Component, OnInit } from '@angular/core';
import { Meteo } from '../app/models/meteo';
import {MeteoService} from '../app/Service/meteo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-technique2';
  meteo = new Meteo();
  constructor(private serviceMeteo: MeteoService) { }
  
  ngOnInit()
  {
    this.serviceMeteo.getInfosMeteo().subscribe(data =>
    {
      this.meteo.temp = data['main']['temp'];
      this.meteo.sunset = data['sys']['sunset'];
      this.meteo.sunrise = data['sys']['sunrise'];


      })
  }
}
