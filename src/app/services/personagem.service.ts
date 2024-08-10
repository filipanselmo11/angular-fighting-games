import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PersonagemResponse } from '../interfaces/personagem';


@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private personaSubject = new BehaviorSubject<PersonagemResponse[]>([]);
  personagens$ = this.personaSubject.asObservable();
  baseUrl = 'https://fighting-games-fastapi.onrender.com/api/v1';

  constructor(private httpClient: HttpClient) {
    this.getPersonagens();
  }

  getPersonagens() {
    return this.httpClient.get<PersonagemResponse[]>(`${this.baseUrl}/personagens`).subscribe(products => {
      this.personaSubject.next(products);
    });
  }

  createPersonagem(nome: string, img: string, descricao: string, jogo: string): Observable<any> {
    const data = { nome, img, descricao, jogo };
    return this.httpClient.post<any>(`${this.baseUrl}/personagens`, data)
      .pipe(tap(newPersonagem => {
        const currentPersonagens = this.personaSubject.value;
        this.personaSubject.next([...currentPersonagens, newPersonagem]);
      }));
  }
}
