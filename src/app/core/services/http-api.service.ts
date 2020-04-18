import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  constructor(private http: HttpClient) { }

  getCountries(name) {
    return this.http
        .get(`${environment.COUNTRIES_API_URL}rest/v2/name/${name}`);
  }

  getCountry(name) {
    return this.http
        .get(`${environment.COUNTRIES_API_URL}rest/v2/name/${name}?fullText=true`);
  }
}
