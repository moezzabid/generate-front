import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneratedNumberDTO } from '../model/GeneratedNumberDTO';
import { ConfigurationDTO } from '../model/ConfigurationDTO';

@Injectable({
  providedIn: 'root'
})
export class NumberingService {

  private apiUrl = 'http://localhost:8080/api/numbering';  // L'URL de votre API backend

  constructor(private http: HttpClient) { }

  // Méthode pour générer un numéro
  generateNumber(generatedNumberDTO: GeneratedNumberDTO): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/generate`, generatedNumberDTO);
  }

  // Méthode pour sauvegarder une configuration
  saveConfiguration(configurationDTO: ConfigurationDTO): Observable<ConfigurationDTO> {
    return this.http.post<ConfigurationDTO>(`${this.apiUrl}/config`, configurationDTO);
  }
}
