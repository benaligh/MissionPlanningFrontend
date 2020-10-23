import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  api_server = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAllLivreur() {
    return this.http.get<any>(this.api_server+ '/api/livreur');
  }
}
