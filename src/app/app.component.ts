import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet,CommonModule,MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appEnfa2';
  isLoginPage: boolean = false;
  isMainMenuPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
        this.isMainMenuPage = event.url === '/main-menu';
      }
    });
  }

  goToMainMenu(): void {
    this.router.navigate(['/main-menu']);
  }
}