import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  created: boolean;
  canStart: boolean;

  constructor(private router: Router,
    private gameService: GameService) { }

  ngOnInit() {
    this.gameService.isGameAvailable().subscribe((x) => {
      console.info(x);
      if (x === true){
          this.created = x;
            
        let interGame = window.setInterval(() => {
          this.gameService.isGameStarted().subscribe(x => {
            if (x === true) {
              this.router.navigate(['tabs', 'play', 'battle']);
            }
          });
        }, 1000);
      }
    });
  }

  setup() {
    this.gameService.createGame().subscribe(() => {
      console.info('Game Created!');
      this.created = true;
    });
  }

  start(){
    this.gameService.startGame().subscribe(x => {
      console.info(x);
      this.router.navigate(['tabs', 'play', 'battle']);
    });

  }
}
