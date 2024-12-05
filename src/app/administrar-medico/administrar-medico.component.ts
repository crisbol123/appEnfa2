import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MedicoService } from '../medico.service';
import { IMedico } from '../interfaces/medico';
import { FechasService } from '../fechas.service';
import moment from 'moment';

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
export class AdministrarMedicoComponent implements OnInit {
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

  doctors: IMedico[] = [];
  availableDates: {id:number, fecha: string; hora: string }[] = [];
  selectedDoctor: number | null = null;
  selectedDate: { id:number, fecha: string; hora: string } | null = null;
 
  newDate: Date | undefined;
  newTime: string | undefined;

  constructor(private medicoService: MedicoService,private  fechaService: FechasService) {}

  ngOnInit(): void {

  }
  loadDoctors(specialtyId: number): void {
   this.medicoService.getMedicos(specialtyId).subscribe(
      (response) => {
        this.doctors = response.map((medico: any) => ({ id: medico.id, nombre: medico.nombre }));
this.availableDates = [];
      if(this.doctors.length>0){
        this.selectedDoctor = this.doctors[0].id;
        this.onDoctorChange(this.selectedDoctor);
      }
},
      (error) => {
        console.error('Error al cargar los médicos:', error);
      }
    );
  }

  addDate(): void {
    if (this.newDate && this.newTime && this.selectedDoctor) {
     
      this.fechaService.createFecha({ fecha: this.newDate, hora: this.newTime, idMedico: this.selectedDoctor! }).subscribe(
        (response) => {
this.onDoctorChange(this.selectedDoctor);
        },
        (error) => {
          console.error('Error al crear la fecha:', error);
        }
      );
    }
    console.log('Fechas disponibles:', this.availableDates);
  }

  deleteDoctor(): void {
    if (this.selectedDoctor) {
this.medicoService.deleteMedico(this.selectedDoctor).subscribe(
      (response) => {
        this.doctors = this.doctors.filter((doctor) => doctor.id !== this.selectedDoctor);
        this.selectedDoctor = null;
        this.availableDates = [];
      },
      (error) => {
        console.error('Error al eliminar el médico:', error);
      }
    );
    } else {
      console.warn('No se ha seleccionado ningún médico');
    }
  }

  deleteDate(): void {
    this.fechaService.deleteFecha(this.selectedDate!.id).subscribe(
      (response) => {
        this.availableDates = this.availableDates.filter((date) => date.id !== this.selectedDate!.id);
        this.selectedDate = null;
      },
      (error) => {
        console.error('Error al eliminar la fecha:', error);
      }
    );
  }

  onDoctorChange(event: any): void {
    if (this.selectedDoctor) {
      this.fechaService.getFechas(this.selectedDoctor).subscribe(
        (response) => {
          this.availableDates = response.map((fecha: any) => {
            const formattedDate = moment(fecha.fecha).format('LL'); 
            return { id: fecha.id, fecha: formattedDate, hora: fecha.hora };
          });

          console.log('Fechas disponibles cargadas:', this.availableDates);
        },
        (error) => {
          console.error('Error al cargar las fechas:', error);
        }
      );
    }
  }

  selectedSpecialty: number | null = null;

  selectSpecialty(specialtyId: number): void {
    this.selectedSpecialty = specialtyId;
    this.loadDoctors(specialtyId);
  }
}