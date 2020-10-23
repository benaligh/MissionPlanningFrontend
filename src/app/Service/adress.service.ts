import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdressService {

  api_server = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAllAdress() {
    return this.http.get<any>(this.api_server+ '/api/adress');
  }
}
