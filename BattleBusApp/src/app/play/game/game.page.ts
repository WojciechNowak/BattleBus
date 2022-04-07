import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  submitted: boolean;
  result: number;

  constructor(private router: Router, 
    private gameService: GameService,  
    private userService: UserService) { }

  ngOnInit() {
  }

  finish() {
    this.result = this.randomInt(0, 100);

    this.gameService.gameResult(this.result).subscribe(() => {
      this.submitted = true;

      let interGame = window.setInterval(() => {
        this.gameService.isGameFinished().subscribe(x => {
          console.info(x);
          if (x != undefined) {
            console.info(x);
            window.clearInterval(interGame);
            if (this.userService.getUser().userName.toLowerCase() == x.userName.toLowerCase()){
              this.router.navigate(['tabs', 'play', 'reward']);
            }
            this.router.navigate(['tabs', 'tab3']);
          }
        });
      }, 1000);
    })
  }

  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
}
