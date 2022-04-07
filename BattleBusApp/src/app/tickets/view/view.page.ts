import { Component, OnInit } from '@angular/core';
import { Ticket, TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  ticket: Ticket;

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.ticketsService.getTicket(1).subscribe(x => {
      this.ticket = x;
    });
  }

}
