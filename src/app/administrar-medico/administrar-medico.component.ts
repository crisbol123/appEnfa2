import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administrar-medico',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './administrar-medico.component.html',
  styleUrls: ['./administrar-medico.component.css'],
})
export class AdministrarMedicoComponent {
  specialties = [
    { name: 'Medicina general', icon: 'assets/icons/medicina-general.svg', id: 1 },
    { name: 'Neurología', icon: 'assets/icons/neurologia.svg', id: 2 },
    { name: 'Cardiología', icon: 'assets/icons/cardiologia.svg', id: 3 },
    { name: 'Dermatología', icon: 'assets/icons/dermatologia.svg', id: 4 },
    { name: 'Odontología', icon: 'assets/icons/odontologia.svg', id: 5 },
    { name: 'Ginecología', icon: 'assets/icons/ginecologia.svg', id: 6 },
    { name: 'Pediatría', icon: 'assets/icons/pediatria.svg', id: 7 },
    { name: 'Cirugía', icon: 'assets/icons/cirugia.svg', id: 8 },
    { name: 'Urología', icon: 'assets/icons/urologia.svg', id: 9 },
  ];

  doctors: string[] = [];
  availableDates: { date: string; time: string }[] = [];
  selectedDoctor: string | null = null;
  selectedDate: { date: string; time: string } | null = null;

  loadDoctors(specialtyId: number): void {
    console.log(`Cargando médicos para la especialidad con ID: ${specialtyId}`);
    this.doctors = [`Dr. Juan Pérez (${specialtyId})`, `Dra. Ana López (${specialtyId})`];
  }

  addDate(event: any, time: string): void {
    const newDate: Date | null = (event as MatDatepickerInputEvent<Date>).value;
    if (newDate) {
      const formattedDate = newDate.toISOString().split('T')[0]; // Solo fecha
      this.availableDates.push({ date: formattedDate, time });
      console.log('Fecha y hora agregadas:', `${formattedDate} ${time}`);
    }
  }

  deleteDoctor(): void {
    if (this.selectedDoctor) {
      console.log(`Eliminando médico: ${this.selectedDoctor}`);
      this.doctors = this.doctors.filter((doctor) => doctor !== this.selectedDoctor);
      this.selectedDoctor = null;
    } else {
      console.warn('No se ha seleccionado ningún médico');
    }
  }

  deleteDate(): void {
    if (this.selectedDate) {
      console.log(`Eliminando fecha: ${this.selectedDate.date} ${this.selectedDate.time}`);
      this.availableDates = this.availableDates.filter(
        (date) => this.selectedDate && (date.date !== this.selectedDate.date || date.time !== this.selectedDate.time)
      );
      this.selectedDate = null;
    } else {
      console.warn('No se ha seleccionado ninguna fecha');
    }
  }
}