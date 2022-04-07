import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.page.html',
  styleUrls: ['./reward.page.scss'],
})
export class RewardPage implements OnInit {
  chestImg: String;
  constructor(private router: Router,
              private toastCtrl: ToastController,) { }

  ngOnInit() {
    this.chestImg = "https://static.turbosquid.com/Preview/2015/07/05__10_19_53/Rend_2.jpg192aa8af-86bb-4267-8c12-085327c2d78bZoom.jpg";
  }

  claim() {
      this.chestImg = "https://static.turbosquid.com/Preview/2015/07/05__10_19_53/Rend_1.jpg43286581-07d6-4ef3-ab57-342a64c12346Zoom.jpg";
      let toast = this.toastCtrl.create({  
        message: `CONGRATULATIONS YOU WON A FREE DAILY TICKET!`,  
        icon: 'warning-circle',
        position: 'top',
        color: 'success',
        buttons: [
          {
            text: 'NEXT',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
              this.router.navigate(['tabs', 'tab3']);
            }
          }]
      }).then((x) => {x.present();});
  }

  

}
