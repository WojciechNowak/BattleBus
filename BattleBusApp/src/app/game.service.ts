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
      let request = this.http.get('http://localhost:5075/PassengerInfo/GetOn', {params: {name: this.userService.getUser().userName}});
      return request;
    }

    GetBusUsers() : Observable<string[]> {
      let request = this.http.get<string[]>('http://localhost:5075/PassengerInfo/Get');
      return request;
    }

    createGame() {
      return this.http.post(`http://localhost:5075/Game/CreateGame?userName=${this.userService.getUser().userName}`, '');
    }

    joinGame() {
      return this.http.post(`http://localhost:5075/Game/JoinGame?userName=${this.userService.getUser().userName}`, '');
    }

    startGame() {
      return this.http.post(`http://localhost:5075/Game/StartGame?userName=${this.userService.getUser().userName}`, '');
    }

    isGameAvailable() {
      if(this.userService.getUser() == undefined){
        return;
      }
      return this.http.get<boolean>('http://localhost:5075/Game/IsGameAvailable');
    }

    isGameStarted() {
      if(this.userService.getUser() == undefined){
        return;
      }
      return this.http.get<boolean>('http://localhost:5075/Game/IsGameStarted');
    }

    isGameFinished() {
      if(this.userService.getUser() == undefined){
        return;
      }
      return this.http.get<string>('http://localhost:5075/Game/IsGameFinished');
    }
}
