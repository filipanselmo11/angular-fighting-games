import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { PersonagemFormComponent } from '../../components/personagem-form/personagem-form.component';
import { Router } from '@angular/router';
import { PersonagemService } from '../../services/personagem.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { TextareaComponent } from '../../components/textarea/textarea.component';


@Component({
  selector: 'app-add-jogo',
  standalone: true,
  imports: [
      CommonModule,
      ButtonComponent,
      PersonagemFormComponent,
      ReactiveFormsModule,
      InputComponent,
      TextareaComponent
    ],
  templateUrl: './add-jogo.component.html',
  styleUrl: './add-jogo.component.css'
})
export class AddJogoComponent {
  personagemForm: FormGroup;
  criando: boolean = true;

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
      this.criando = false;
      this.personagemService.createPersonagem(
        this.personagemForm.value.nome,
        this.personagemForm.value.img,
        this.personagemForm.value.descricao,
        this.personagemForm.value.jogo
      ).subscribe({
        next: data => {
          console.log('Data ', data);
          this.router.navigate(['']);
        }
      })
    } else {
      console.log('Personagem Form Error');
    }
  }


}
