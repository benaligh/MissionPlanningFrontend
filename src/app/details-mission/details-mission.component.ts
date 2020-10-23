import { Component, OnInit } from '@angular/core';
import { MissionService } from '../Service/mission.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-mission',
  templateUrl: './details-mission.component.html',
  styleUrls: ['./details-mission.component.css']
})
export class DetailsMissionComponent implements OnInit {

  id: number;
  detailsMission: any;

  constructor(
    private missionService: MissionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.missionService.getDetailsMissionById(this.id).subscribe(
      data => {
      this.detailsMission = data;
      console.log(this.detailsMission)
    });
    }
}
