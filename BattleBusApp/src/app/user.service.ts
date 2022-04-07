import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface User  {
  username: string, 
  gameStreak: number,
  level: number,
  favouriteGame: string,
  discount: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUser: User;

  constructor(private http: HttpClient) { }

  login(username: string) : Observable<User> {
    let request = this.http.get<User>('http://localhost:5075/User', {params: {userName: username}});
    request.subscribe(x => {
      console.info('set user?');
      this.loggedInUser = x;
    });
    return request;
  }

  getUser(): User{
    return this.loggedInUser;
  }
}
