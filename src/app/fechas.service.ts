import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FechasService {
  private apiUrl = 'http://localhost:8085/fecha';

  constructor(private http: HttpClient) {}

  getFechas(idMedico:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar?idMedico=${idMedico}`);
  }

  createFecha(fecha: { fecha: Date; hora: string, idMedico:number}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/guardar`, fecha);
  }

  deleteFecha(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}