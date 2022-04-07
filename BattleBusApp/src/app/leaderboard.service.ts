import { Injectable } from '@angular/core';

interface leaderboardRow {
  ranking: number,
  username: string,
  points: string
}

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor() { }

}
