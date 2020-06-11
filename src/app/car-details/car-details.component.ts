import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car = {
    marque:"",
    nImatriculation:"",
    nbrSiege:"",
    couleur:"",
    image: "",
  };

  
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(JSON.parse(this.activatedRoute.snapshot.params.car));
    this.car = JSON.parse(this.activatedRoute.snapshot.params.car);
  }
}
