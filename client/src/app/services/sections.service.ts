import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SectionsResponse} from '../interfaces/sections-response';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private http: HttpClient) {
  }

  fetchSections(): Observable<SectionsResponse> {
    return this.http.get<SectionsResponse>('/sections');
  }
}
