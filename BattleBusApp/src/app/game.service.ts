import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient,
    private userService: UserService) { }

    OnBus() {
      let request = this.http.post('http://localhost:5075/PassengerInfo', {params: {userName: this.userService.getUser().username}});
      return request;
    }

    GetBusUsers() {
      //let request = this.http.get('http://localhost:5075/PassengerInfo', {params: {userName: this.userService.getUser().username}});
      let request = this.http.get('http://localhost:5075/PassengerInfo/Get');
      return request;
    }
}
