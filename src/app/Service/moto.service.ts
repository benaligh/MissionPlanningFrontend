import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MotoService {

  api_server = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAllMoto() {
    return this.http.get<any>(this.api_server+ '/api/moto');
  }
}
