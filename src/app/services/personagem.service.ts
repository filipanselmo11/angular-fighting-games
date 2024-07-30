import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private personaSubject = new BehaviorSubject<any[]>([]);
  personagens$ = this.personaSubject.asObservable();
  baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
    this.getPersonagens();
  }

  getPersonagens() {
    return this.httpClient.get<any[]>(`${this.baseUrl}/personagems`).subscribe(products => {
      this.personaSubject.next(products);
    });
  }
}
