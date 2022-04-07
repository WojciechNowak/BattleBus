import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Ticket, TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  ticket: Ticket;

  constructor(private ticketsService: TicketsService,
    private gameService: GameService) { }

  ngOnInit() {
    this.ticketsService.getTicket(1).subscribe(x => {
      this.ticket = x;
    });
    window.setTimeout(() => {
      this.gameService.OnBus().subscribe(x => {console.info('Player is on the bus')})
    }, 3000);
  }

}
