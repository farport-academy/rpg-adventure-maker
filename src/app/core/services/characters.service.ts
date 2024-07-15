import { inject, Injectable } from '@angular/core';
import { EssentialService } from './essentialService';
import { map, Observable, tap } from 'rxjs';
import { Character } from '../models/characters';
import { HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends EssentialService {

  private authService = inject(AuthService)

  constructor() {
    super();
    this.apiPath = 'characters';
  }

  getCharacter(userID:number | null = null):Observable<Character>{
    return this.apiCall<Character[]>({
      type: 'GET',
      url: `${this.apiUrl}`,
      options: {
        params: new HttpParams()
          .set('partyId', this.authService.currentUser.partyId)
          .set('userID', userID || this.authService.currentUser.id)
      }
    }).pipe(
      map((res) => res[0])
    )
  }

  updateCharacter(body: Partial<Character>, characterID:string|number): Observable<Character>{
    return this.apiCall<Character>({
      type: 'PATCH',
      url: `${this.apiUrl}/${characterID}`,
      options: {
        body
      }
    }).pipe(
      tap(() => {
        this.snackbar.open('Utente aggiornato con successo', 'chiudi', {
          duration: 2000,
        });
      })
    )
  }

  createCharacter(body: Partial<Character>) : Observable<Character>{
    const parsedBody = {
      ...body,
      partyId: this.authService.currentUser.partyId,
      userID: this.authService.currentUser.id
    }
    return this.apiCall<Character>({
      type: 'POST',
      url: `${this.apiUrl}`,
      options: {
        body: parsedBody
      }
    }).pipe(
      tap(() => {
        this.snackbar.open('Utente creato con successo', 'chiudi', {
          duration: 2000,
        });
      })
    )
  }
}
