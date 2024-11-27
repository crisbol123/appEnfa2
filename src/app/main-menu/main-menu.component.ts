import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {

  constructor(private router: Router) { }

  navigateTo(page: string): void {
    switch (page) {
      case 'agregar-medico':
        this.router.navigate(['/agregar-medico']);
        break;
      case 'administrar-medico':
        this.router.navigate(['/administrar-medico']);
        break;
      case 'perfil':
        this.router.navigate(['/perfil']);
        break;
      default:
        break;
    }
  }

  logout(): void {
    console.log('Cerrando sesión...');
    this.router.navigate(['']);
  }
}