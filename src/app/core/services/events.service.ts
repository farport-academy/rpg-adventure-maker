import { inject, Injectable } from '@angular/core';
import { EssentialService } from './essentialService';
import { GameEvent } from '../models/events';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends EssentialService {
  authService = inject(AuthService)

  constructor() {
    super()
    this.apiPath = 'events'
   }

   createEvent(body: Partial<GameEvent>):Observable<GameEvent>{
    const partyId = this.authService.partyId
    const today = new Date()
    
    const data = {
      ...body,
      partyId,
      creationDate: today.getTime()
    }

    return this.apiCall<GameEvent>(
      {
        type: 'POST',
        url: this.apiUrl,
        options:{
          body: data
        }
      }
    ).pipe(
      tap(
        _res =>{
          this.snackbar.open('Evento Creato con successo', 'chiudi', {
            duration: 2000
          })
        }
      )
    )
    
   }
}
