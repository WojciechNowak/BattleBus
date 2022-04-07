import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface User  {
  userName: string, 
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
  id: number;

  constructor(private http: HttpClient) {
    this.id = Math.random();
   }

  login(username: string) : Observable<User> {
    let request = this.http.get<User>('http://localhost:5075/User', {params: {userName: username}});
    request.subscribe(x => {
      this.loggedInUser = x;
    });
    return request;
  }

  getUser(): User{
    return this.loggedInUser;
  }
}

