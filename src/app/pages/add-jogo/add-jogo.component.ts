import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RadioComponent } from '../../components/radio/radio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-jogo',
  standalone: true,
  imports: [ CommonModule, FormComponent, ButtonComponent, RadioComponent ],
  templateUrl: './add-jogo.component.html',
  styleUrl: './add-jogo.component.css'
})
export class AddJogoComponent {
  selectedType: string = 'Personagem';

  onTypeChange(type: string) {
    this.selectedType = type;
  }
}
