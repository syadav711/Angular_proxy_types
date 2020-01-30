import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { State } from 'src/types/state';
import { City } from 'src/types/city';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get<State[]>('/api/getStates');
  }

  getCitiesOfState(id) {
    return this.http.get<City[]>(`/api/getCities/${id}`);
  }
}
