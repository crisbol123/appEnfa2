import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-agregar-medico',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule, // Agregar aquí el módulo necesario para usar mat-card
  ],
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css'],
})
export class AgregarMedicoComponent implements OnInit {
  medicoForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Configuración del formulario reactivo
    this.medicoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      identificacion: ['', Validators.required],
      especialidad: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.medicoForm.valid) {
      console.log('Formulario válido:', this.medicoForm.value);
      this.router.navigate(['']);
    } else {
      console.log('Formulario inválido');
    }
  }
}