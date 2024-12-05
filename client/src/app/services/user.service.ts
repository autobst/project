import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserResponse} from '../interfaces/user-response';
import {UserForgot} from '../interfaces/user-forgot';
import {UserRegister} from '../interfaces/user-register';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  fetchUser(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>('/user', user);
  }

  remind(user: UserForgot): Observable<UserResponse> {
    return this.http.post<UserResponse>('/remind', user);
  }

  register(user: UserRegister): Observable<UserResponse> {
    return this.http.post<UserResponse>('/registerUser', user);
  }
}
