import { Component, OnInit } from '@angular/core';
import { MissionService } from '../Service/mission.service';


@Component({
  selector: 'app-nbr-mission-up-com',
  templateUrl: './nbr-mission-up-com.component.html',
  styleUrls: ['./nbr-mission-up-com.component.css']
})
export class NbrMissionUpComComponent implements OnInit {

  nbrMissionCome;

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.nbrMissionCome = this.getNbMissionCome();
  }

  getNbMissionCome() {
    this.missionService.getMissionCome().subscribe(
      data => {
      this.nbrMissionCome = data;
    });
  }

}
