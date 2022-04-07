import { Component, OnInit } from '@angular/core';
import { leaderboardRow, LeaderboardService } from '../leaderboard.service';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  board: leaderboardRow[];
  user: User;

  constructor(private userService: UserService,
    private leaderboardService: LeaderboardService) {}
  
    ngOnInit(): void {
      this.leaderboardService.get().subscribe(x => {
        this.board = x;
        console.info(x);
      });
      this.user = this.userService.getUser();
    }

}
