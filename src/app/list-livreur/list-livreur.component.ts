import { Component, OnInit } from '@angular/core';
import { LivreurService } from '../Service/livreur.service';

@Component({
  selector: 'app-list-livreur',
  templateUrl: './list-livreur.component.html',
  styleUrls: ['./list-livreur.component.css']
})
export class ListLivreurComponent implements OnInit {

  livreurList : any;

  constructor(private livreurSevice: LivreurService) { }

  ngOnInit(): void {
    this.getAllsLivreur();
  }


  getAllsLivreur() {
    this.livreurSevice.getAllLivreur().subscribe(
      data => {
      this.livreurList = data;
    });
  }

}
