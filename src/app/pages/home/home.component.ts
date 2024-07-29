import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CardComponent, ButtonComponent, DialogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isVisible: boolean = false;

  constructor(private router: Router) {}

  openModal() {
    this.isVisible = true;
  }

  goAddPage() {
    this.router.navigate(['add-jogo']);
  }
}
