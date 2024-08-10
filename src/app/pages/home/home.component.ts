import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { Router } from '@angular/router';
import { PersonagemService } from '../../services/personagem.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PersonagemResponse } from '../../interfaces/personagem';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CardComponent, ButtonComponent, DialogComponent, CommonModule ],
  // providers: [
  //   PersonagemService
  // ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isVisible: boolean = false;
  carregando: boolean = true;
  personagens$: Observable<PersonagemResponse[]>;

  constructor(private router: Router, private personagemService: PersonagemService) {
    this.personagens$ = this.personagemService.personagens$;
  }

  ngOnInit(): void {
    this.getPersonagens();
  }

  openModal() {
    this.isVisible = true;
  }

  goAddPage() {
    this.router.navigate(['add-jogo']);
  }

  getPersonagens() {
    this.personagemService.personagens$.subscribe({
      next: data => {
        this.carregando = false;
        console.log('Personagens ', data);
      }, error: err => {
        console.error(err);
      }
    });
  }
}
