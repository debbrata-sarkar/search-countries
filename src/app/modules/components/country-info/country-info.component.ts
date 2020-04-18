import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../core/services/stats.service';
import { HttpApiService } from '../../../core/services/http-api.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  countryList: Array<object> = [];
  countryDetails: Array<object> = [];
  toggleCountryCard: boolean = false;
  selectedCountry: string;
  constructor(private statsService: StatsService, private httspService: HttpApiService) { }

  getCountryList(event) {
    this.countryList = [];
    const name = event.target.value;
    if (!!name) {
      this.statsService.getCountries(event.target.value);
    }
  }

  showCountryDetails(event, user) {
    event.stopPropagation();
    this.selectedCountry = user.name;
    if (this.countryDetails.length == 1) {
      const result = confirm("Do you want to overwrite current country details ? Press 'OK' if you want or Press 'CANCEL if you want to keep existing country details!");
      if (result == true) {
        this.countryDetails = [];
        this.statsService.getCountry(user.name.trim());
      } else {
        this.statsService.getCountry(user.name.trim());
      }
    } else {
      this.statsService.getCountry(user.name.trim());
    }
  }

  ngOnInit() {

    // GET COUNTRIES
    this.statsService.countries.subscribe((data: Array<Object>) => {
      this.countryList = [];
      data.forEach(c => {
        const flagURL = `${environment.FLAGS_API_URL}${c['alpha2Code']}/flat/64.png`; 
        // const countryObj = { 'name': c['name'], 'flag': c['flag'] };
        const countryObj = { 'name': c['name'], 'flag': flagURL };
        this.countryList.push(countryObj);
      });
    });

    // GET COUNTRY DETAILS
    this.statsService.country.subscribe((data) => {
      if (!!data[0]) {
        if (this.countryDetails.length === 2) {
          this.countryDetails = [];
        }
        this.countryDetails.push(data[0]);
      }
    });
  }

}
