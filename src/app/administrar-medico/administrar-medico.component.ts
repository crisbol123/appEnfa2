import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administrar-medico',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './administrar-medico.component.html',
  styleUrls: ['./administrar-medico.component.css'],
})
export class AdministrarMedicoComponent {
  specialties = [
    { name: 'Medicina general', icon: 'assets/icons/medicina-general.svg' },
    { name: 'Neurología', icon: 'assets/icons/neurologia.svg' },
    { name: 'Cardiología', icon: 'assets/icons/cardiologia.svg' },
    { name: 'Dermatología', icon: 'assets/icons/dermatologia.svg' },
    { name: 'Odontología', icon: 'assets/icons/odontologia.svg' },
    { name: 'Ginecología', icon: 'assets/icons/ginecologia.svg' },
    { name: 'Pediatría', icon: 'assets/icons/pediatria.svg' },
    { name: 'Cirugía', icon: 'assets/icons/cirugia.svg' },
    { name: 'Urología', icon: 'assets/icons/urologia.svg' },
  ];

  doctors = ['Dr. Juan Pérez', 'Dra. Ana López', 'Dr. Carlos García'];

  availableDates = ['01/12/2024', '05/12/2024', '10/12/2024'];

  selectedDoctor: string | null = null;
  selectedDate: string | null = null;
}