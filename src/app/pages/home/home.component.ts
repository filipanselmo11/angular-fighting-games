import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CardComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}