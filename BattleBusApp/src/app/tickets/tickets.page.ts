import { Component, OnInit } from '@angular/core';
import { TicketsService, Ticket } from '../tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {
  tickets: Ticket[];

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.ticketsService.getTickets().subscribe(x => {
      this.tickets = x;
      console.info(this.tickets);
    });
  }

}
