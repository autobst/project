import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostResponse} from '../interfaces/post-response';
import {PostState} from '../interfaces/post-state';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  add(postData: PostState): Observable<PostResponse> {
    return this.http.post<PostResponse>('/add-post', postData);
  }
}
