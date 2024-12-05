import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CargarUsuarioService } from '../cargar-usuario.service';

type EditableField = 'name' | 'email' | 'identification' | 'password';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {

  constructor( private cargar: CargarUsuarioService) { }
  profile = {
    name: '',
    email: '',
    identification: '',
    password: '',
  };

  editState: Record<EditableField, boolean> = {
    name: false,
    email: false,
    identification: false,
    password: false,
  };

  isSubmitting: boolean = false; 
  submissionError: boolean = false; 

  ngOnInit(): void {
  this.cargar.getUsuario(localStorage.getItem('authToken')).subscribe(
    response => {
      this.profile.name = response.nombre;
      this.profile.email = response.correo;
      this.profile.identification = response.cedula;
      this.profile.password = response.password;
    },
    error => {
      console.log('Error al cargar los datos del usuario');
    }
  );
  }

  enableEdit(field: EditableField): void {
    this.editState[field] = true;
  }

  saveProfile(): void {
    this.isSubmitting = true;
    this.submissionError = false;

    // Preparar datos para el backend
    const profileData = {
      name: this.profile.name,
      email: this.profile.email,
      identification: this.profile.identification,
      password: this.profile.password,
    };

    console.log('Datos listos para enviar:', profileData);

    // Simulación de envío al backend
    setTimeout(() => {
      // TODO: Reemplazar con la lógica de envío al backend
      console.log('Cambios guardados correctamente');
      this.isSubmitting = false;

      // Resetea los estados de edición
      this.editState = {
        name: false,
        email: false,
        identification: false,
        password: false,
      };
    }, 2000);
  }
}