import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private apiUrl = 'http://localhost:8085/medico'; 

  constructor(private http: HttpClient) {}


  getMedicos(specialtyId:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/listar?especialidad=${specialtyId}`);
  }

  createMedico(medico: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/guardar`, medico);
  }



  deleteMedico(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}