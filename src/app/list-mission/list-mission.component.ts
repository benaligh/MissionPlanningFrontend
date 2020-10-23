import { Component, OnInit } from '@angular/core';
import { MissionService } from '../Service/mission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-mission',
  templateUrl: './list-mission.component.html',
  styleUrls: ['./list-mission.component.css']
})
export class ListMissionComponent implements OnInit {

  missionList : any;

  constructor(private missionService: MissionService, private router: Router) { }

  ngOnInit(): void {
    this.getAllsLivreur();
  }

  getAllsLivreur() {
    this.missionService.getAllMission().subscribe(
      data => {
      this.missionList = data;
    });
  }


 /* detailsMission() {
    this.router.navigate(['/details']);
  }*/


  /* goToMissionDetails(id) {
    this.router.navigate(['/details', id]);
  }*/

}

