import { Component, OnInit } from '@angular/core';
import { AdressService } from '../Service/adress.service';

@Component({
  selector: 'app-list-adress',
  templateUrl: './list-adress.component.html',
  styleUrls: ['./list-adress.component.css']
})
export class ListAdressComponent implements OnInit {

  adressList : any;

  constructor(private adressService: AdressService) { }

  ngOnInit(): void {
    this.getAllsMotos();
  }


  getAllsMotos() {
    this.adressService.getAllAdress().subscribe(
      data => {
      this.adressList = data;
    });
  }
}
