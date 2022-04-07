import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface User  {
  username: string, 
  gameStreak: number,
  level: number
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUser: User;

  constructor(private http: HttpClient) { }

  login(username: string) : Observable<User> {
    console.info(username);
    this.loggedInUser = { username, gameStreak: 5, level: 2 };
    return of(this.loggedInUser);
  }

  getUser(): User{
    return this.loggedInUser;
  }
}
