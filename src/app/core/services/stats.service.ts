import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpApiService } from '../services/http-api.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  countries: BehaviorSubject<object>;
  country: BehaviorSubject<object>;

  constructor(private httpService: HttpApiService) {
    this.countries = new BehaviorSubject([]);
    this.country = new BehaviorSubject([]);
  }

  getCountries(name) {
    this.httpService.getCountries(name).subscribe((data) => {
      return this.countries.next(data);
    });
  };

  getCountry(fullName) {
    this.httpService.getCountry(fullName).subscribe((data) => {
      return this.country.next(data);
    });
  };

}
