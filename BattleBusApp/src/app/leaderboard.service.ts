import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface leaderboardRow {
  userName: string,
  points: string
}

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  get() {
    let request = this.http.get<leaderboardRow[]>('http://localhost:5075/Game/GetLeaderboard');
    return request;
  }
}
