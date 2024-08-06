import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RadioComponent } from '../../components/radio/radio.component';
import { CommonModule } from '@angular/common';
import { PersonagemFormComponent } from '../../components/personagem-form/personagem-form.component';
import { JogoFormComponent } from '../../components/jogo-form/jogo-form.component';
import { Router } from '@angular/router';
import { PersonagemService } from '../../services/personagem.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-jogo',
  standalone: true,
  imports: [ CommonModule, ButtonComponent, PersonagemFormComponent, ReactiveFormsModule],
  templateUrl: './add-jogo.component.html',
  styleUrl: './add-jogo.component.css'
})
export class AddJogoComponent {
  personagemForm: FormGroup;

  constructor(private router: Router, private personagemService: PersonagemService) {
    this.personagemForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      jogo: new FormControl('', [Validators.required])
    });
  }

  onCreatePersonagem() {
    if (this.personagemForm.valid) {
      this.personagemService.createPersonagem(
        this.personagemForm.value.nome,
        this.personagemForm.value.img,
        this.personagemForm.value.descricao,
        this.personagemForm.value.jogo
      ).subscribe({
        next: data => {
          console.log('Data ', data);
          this.router.navigate(['home']);
        }
      })
    } else {
      console.log('Personagem Form Error');
    }
  }


}
