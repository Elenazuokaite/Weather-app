import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
weather: any;
cityList: any;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.cityList = [];
  }
  onSearchChange(searchValue) {
    if (searchValue.length >= 3) {
      this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + searchValue
        + '&appid=8b14eb2c5beed13dd28c80dffdf74d42').subscribe(weather => {
        this.weather = weather;
        console.log(this.weather);
          console.log(this.weather.main.temp);
      });
    }

  }
  onChange(value, apiId) {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&appid=' + apiId).subscribe(weather => {
      this.weather = weather;
      console.log(this.cityList);
      this.cityList.push(this.weather);
      console.log('veikia');
    });
  }

}
