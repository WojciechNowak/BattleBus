import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.page.html',
  styleUrls: ['./battle.page.scss'],
})
export class BattlePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.setTimeout(() => this.router.navigate(['tabs', 'play', 'game']), 5000);
  }
}
