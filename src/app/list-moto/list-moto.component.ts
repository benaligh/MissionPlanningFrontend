import { Component, OnInit } from '@angular/core';
import { MotoService } from '../Service/moto.service';

@Component({
  selector: 'app-list-moto',
  templateUrl: './list-moto.component.html',
  styleUrls: ['./list-moto.component.css']
})
export class ListMotoComponent implements OnInit {

  motoList : any;

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.getAllsMotos();
  }


  getAllsMotos() {
    this.motoService.getAllMoto().subscribe(
      data => {
      this.motoList = data;
    });
  }

}
