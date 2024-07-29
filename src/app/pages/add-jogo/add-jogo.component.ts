import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RadioComponent } from '../../components/radio/radio.component';

@Component({
  selector: 'app-add-jogo',
  standalone: true,
  imports: [ FormComponent, ButtonComponent, RadioComponent ],
  templateUrl: './add-jogo.component.html',
  styleUrl: './add-jogo.component.css'
})
export class AddJogoComponent {

}
