import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ResponseMessage {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecensioneService {

  private apiUrl = 'http://localhost:8080/api/recensioni';

  constructor(private http: HttpClient) { }

  // Metodo per aggiungere la recensione
  addRecensione(recensioneData: { commento: string, nomeUtente: string }): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(`${this.apiUrl}/aggiungi`, recensioneData);
  }

  // Metodo per ottenere tutte le recensioni (solo per admin)
  getAllRecensioni(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  deleteRecensione(id: number): Observable<ResponseMessage> {
    return this.http.delete<ResponseMessage>(`${this.apiUrl}/delete/${id}`);
  }
}
