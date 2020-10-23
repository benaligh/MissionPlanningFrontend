import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MissionService {

  api_server = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAllMission() {
    return this.http.get<any>(this.api_server+ '/api/mission');
  }

  getDetailsMissionById(id) {
    return this.http.get<any>(this.api_server+ '/api/mission/'+id);
  }

  getMissionOfToday() {
    return this.http.get(this.api_server+ '/api/misstoday');
  }

  getMissionCome() {
    return this.http.get(this.api_server+ '/api/misscome');
  }

  addNewMission(data) {
    return this.http.post<any>(this.api_server+ '/api/mission', data);
  }

}
