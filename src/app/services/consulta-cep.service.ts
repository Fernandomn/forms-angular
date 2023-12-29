import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {
  apiUrl = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  checkCep(cep: string, ) {
    return this.http.get(`${this.apiUrl}${cep}/json`);
  }
}
