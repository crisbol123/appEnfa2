import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-medico',
  standalone: true,
  imports: [],
  templateUrl: './agregar-medico.component.html',
  styleUrl: './agregar-medico.component.css'
})
export class AgregarMedicoComponent {
  constructor(private router: Router) { }
  agregar() {
    this.router.navigate(['']);
  }

}
