import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TvshowsDto } from '../modules/tvshows';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'ad91a4d95082e856437a93c212898b1b';

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
}
