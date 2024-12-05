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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MedicoService } from '../medico.service';

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
    MatCardModule,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css'],
})
export class AgregarMedicoComponent implements OnInit {
  medicoForm!: FormGroup; // Formulario reactivo
  isSubmitting: boolean = false; // Indicador de envío en curso
  submissionError: boolean = false; // Indicador de error en el envío
  submissionSuccess = false;
  constructor(private fb: FormBuilder, private router: Router,private medicoService: MedicoService) {}

  ngOnInit(): void {
    // Inicialización del formulario con validaciones
    this.medicoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      identificacion: ['', Validators.required],
      especialidad: ['', Validators.required],
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.medicoForm.valid) {
      this.isSubmitting = true; // Inicia el estado de carga
      this.submissionError = false; // Resetea cualquier error previo
      this.submissionSuccess = false;
      // Objeto JSON para simular el envío
      const medicoData = {
        nombre: this.medicoForm.value.nombre,
        correo: this.medicoForm.value.correo,
        identificacion: this.medicoForm.value.identificacion,
        especialidad: this.medicoForm.value.especialidad,
      };
     this.medicoService.createMedico(medicoData).subscribe( 
      
   
      (response) => {
        this.isSubmitting = false; 
        this.submissionSuccess = true; 
      },
   
      (error) => {
        this.isSubmitting = false; 
        this.submissionError = true; 
      }


      );
  }
} 
}