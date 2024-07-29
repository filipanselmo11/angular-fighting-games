import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddJogoComponent } from './pages/add-jogo/add-jogo.component';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: HomeComponent
  },
  {
    title: 'Add Jogo',
    path: 'add-jogo',
    component: AddJogoComponent,
  }
];
