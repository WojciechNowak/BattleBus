import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.page.html',
  styleUrls: ['./reward.page.scss'],
})
export class RewardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  claim() {
      this.router.navigate(['tabs', 'tab3']);
  }

}
