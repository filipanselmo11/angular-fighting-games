import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RadioComponent } from '../../components/radio/radio.component';
import { CommonModule } from '@angular/common';
import { PersonagemFormComponent } from '../../components/personagem-form/personagem-form.component';
import { JogoFormComponent } from '../../components/jogo-form/jogo-form.component';


@Component({
  selector: 'app-add-jogo',
  standalone: true,
  imports: [ CommonModule, ButtonComponent, RadioComponent, PersonagemFormComponent, JogoFormComponent ],
  templateUrl: './add-jogo.component.html',
  styleUrl: './add-jogo.component.css'
})
export class AddJogoComponent {
  selectedType: string = 'Personagem';

  constructor() {

  }


  onTypeChange(type: string) {
    this.selectedType = type;
  }

}
