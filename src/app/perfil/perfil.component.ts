import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type EditableField = 'name' | 'email' | 'phone' | 'password';

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
  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  profile = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  editState: Record<EditableField, boolean> = {
    name: false,
    email: false,
    phone: false,
    password: false,
  };

  // Habilita la edición de un campo específico
  enableEdit(field: EditableField): void {
    this.editState[field] = true;
  }

  // Guarda los cambios realizados
  saveProfile(): void {
    console.log('Perfil guardado:', this.profile);
    this.editState = {
      name: false,
      email: false,
      phone: false,
      password: false,
    };
  }
}