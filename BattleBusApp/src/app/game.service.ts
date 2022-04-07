import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient,
    private userService: UserService) { }

    OnBus() {
      let request = this.http.post('http://localhost:5075/PassengerInfo', {params: {userName: this.userService.getUser().userName}});
      return request;
    }

    GetBusUsers() : Observable<string[]> {
      let request = this.http.get<string[]>('http://localhost:5075/PassengerInfo/Get');
      return request;
    }
}
