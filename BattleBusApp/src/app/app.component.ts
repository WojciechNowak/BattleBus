import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GameService } from './game.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private gameService: GameService,
    private userService: UserService,
    private toastCtrl: ToastController,
    private router: Router) {}

  ngOnInit(): void {
    let inter = window.setInterval(() => {
      this.gameService.GetBusUsers().subscribe(x => {
        let filtered = x.filter(y => y.toLowerCase() != this.userService.getUser().userName.toLowerCase());

        if (filtered.length > 0 && filtered.length !== x.length){
          window.clearInterval(inter);
          let toast = this.toastCtrl.create({  
            message: `Player ${filtered[0]} has entered the Battle bus!`,  
            icon: 'warning-circle',
            position: 'top',
            color: 'danger',
            duration: 3000,
            buttons: [
              {
                text: 'Battle',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                  this.router.navigate(['tabs', 'play' ,'setup']);
                }
              }]
          }).then((x) => {x.present();});
        }
      });
    }, 1000);

    let interGame = window.setInterval(() => {
      this.gameService.isGameAvailable().subscribe(x => {
        if (x){
          window.clearInterval(interGame);
          let toast = this.toastCtrl.create({  
            message: `Game is available to join!`,  
            icon: 'warning-circle',
            position: 'top',
            color: 'danger',
            duration: 10000,
            buttons: [
              {
                text: 'Join',
                role: 'cancel',
                handler: () => {
                  this.gameService.joinGame().subscribe((x) => {
                    this.router.navigate(['tabs', 'play' ,'setup']);
                  });
                }
              }]
          }).then((x) => {x.present();});
        }
      });
    }, 1000);
  }
}
