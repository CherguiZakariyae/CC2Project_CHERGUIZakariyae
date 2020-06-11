import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  Cars = [
    {
      marque:"Dacia",
      nImatriculation:"11111",
      nbrSiege:"4",
      couleur:"black",
      image: "../../assets/dacia.png",
    },
    {
      marque:"BMW",
      nImatriculation:"22222",
      nbrSiege:"4",
      couleur:"white",
      image: "../../assets/bmw.png",
    },
    {
      marque:"Ferrari",
      nImatriculation:"33333",
      nbrSiege:"2",
      couleur:"red",
      image: "../../assets/ferrari.png",
    },
  ];

  badge = 0;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToProductDetail(car) {
    ++this.badge;
    this.router.navigate(["car-details", JSON.stringify(car)]);
  }

}
