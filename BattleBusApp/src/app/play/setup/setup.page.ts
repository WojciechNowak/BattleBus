import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  setup() {
    console.info('Game finished');
    this.router.navigate(['tabs', 'play', 'battle']);
  }
}
