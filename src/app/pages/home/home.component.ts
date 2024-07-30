import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { Router } from '@angular/router';
import { PersonagemService } from '../../services/personagem.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CardComponent, ButtonComponent, DialogComponent],
  // providers: [
  //   PersonagemService
  // ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isVisible: boolean = false;
  personagens$: Observable<any[]>;

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
        console.log('Personagens ', data);
      }, error: err => {
        console.error(err);
      }
    });
  }
}
