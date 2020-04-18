import {HttpApiService} from '../services/http-api.service';
import {StatsService} from '../services/stats.service';

export const services = [
    HttpApiService,
    StatsService
];

export * from './http-api.service';
export * from './stats.service';