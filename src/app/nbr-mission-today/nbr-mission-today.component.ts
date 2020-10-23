import { Component, OnInit } from '@angular/core';
import { MissionService } from '../Service/mission.service';

@Component({
  selector: 'app-nbr-mission-today',
  templateUrl: './nbr-mission-today.component.html',
  styleUrls: ['./nbr-mission-today.component.css']
})
export class NbrMissionTodayComponent implements OnInit {

  nbrMissionToday;
  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.nbrMissionToday = this.getNbMissionToday();
  }


  getNbMissionToday() {
    this.missionService.getMissionOfToday().subscribe(
      data => {
      this.nbrMissionToday = data;
    });
  }

}
