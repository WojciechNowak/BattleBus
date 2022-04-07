import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private gameService: GameService,
    private toastCtrl: ToastController,
    private router: Router) {}

  ngOnInit(): void {
    let inter = window.setInterval(() => {
      this.gameService.GetBusUsers().subscribe(x => {
        console.info(x);
        window.clearInterval(inter);
        let toast = this.toastCtrl.create({  
          message: 'This is a Toast Notification Example',  
          icon: 'information-circle',
          position: 'top',
          buttons: [
            {
              text: 'Done',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
                this.router.navigate(['tabs', 'play' ,'battle']);
              }
            }]
        }).then((x) => {x.present();});
      });
      
    }, 1000)
  }
}
