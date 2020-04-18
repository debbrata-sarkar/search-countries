import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../../core/services/stats.service';
import { HttpApiService } from '../../../core/services/http-api.service';


@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {
  @Input() country;
  constructor(private statsService: StatsService, private httspService: HttpApiService) { }

  ngOnInit() {
  }

}
