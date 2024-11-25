import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';



import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-agregar-medico',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,MatDatepickerModule,

    MatNativeDateModule,

    MatIconModule
],
  templateUrl: './agregar-medico.component.html',
  styleUrl: './agregar-medico.component.css'
})
export class AgregarMedicoComponent {
  nombre: string = 'Cristian';
  constructor(private router: Router) { }
  agregar() {
    this.router.navigate(['']);
  }

}
