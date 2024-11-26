import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { AgregarMedicoComponent } from "./agregar-medico/agregar-medico.component";
import { PerfilComponent } from './perfil/perfil.component';
import { AdministrarMedicoComponent } from './administrar-medico/administrar-medico.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, /*LoginComponent, MainMenuComponent, AgregarMedicoComponent, PerfilComponent*/],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appEnfa2';
}
