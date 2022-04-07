import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

export interface Ticket {
  id: number,
  validFrom: Date,
  validTo: Date,
  name: string, 
  used: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  tickets: Ticket[];

  constructor(private http: HttpClient,
    private userService: UserService) { 
      this.tickets = [{
        id: 1,
        validFrom: new Date(Date.now()),
        validTo: new Date(),
        name: 'Day Ticket',
        used: true
      }, 
      {
        id: 4,
        validFrom: new Date(Date.now()),
        validTo: new Date(),
        name: 'Day Ticket',
        used: false
      }, 
      {
        id: 7,
        validFrom: new Date(Date.now()),
        validTo: new Date(),
        name: 'Day Ticket',
        used: false
      }];
    }

    getTicket(id: number) : Observable<Ticket> {
return of(this.tickets[id]);
    }
  getTickets() : Observable<Ticket[]> {
    let user = this.userService.getUser();
    return of(this.tickets)
  }
}
