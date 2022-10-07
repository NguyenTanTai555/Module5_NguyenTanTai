import {Component, OnInit} from '@angular/core';
import {CarService} from "../../service/car.service";
import {Car} from "../../model/car";
import Swal from 'sweetalert2';
import {Travel} from "../../model/travel";
import {CarCenter} from "../../model/carCenter";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  cars: Car[] = [];
  travels: Travel[] = [];
  carCenter: CarCenter[] = [];
  carDelete: Car;

  constructor(private carService: CarService) {
    // this.carService.getAllCarCenter().subscribe(next => {
    //   // @ts-ignore
    //   this.carCenter = next;
    // })
    // this.carService.getAllTravel().subscribe(next => {
    //   // @ts-ignore
    //   this.travels = next;
    // })
  }

  ngOnInit(): void {
    this.getAll();
  }


  getAll() {
    this.carService.getAll().subscribe(cars => {
      this.cars = cars;
    })
  }

  // deleteCar(id: number) {
  //   this.carService.deleteCar(id).subscribe(() => {
  //     Swal.fire('Tiêu đề', 'Xóa Thành Công', 'success');
  //     this.getAll();
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  getInFoCar(car: Car) {
    this.carDelete = car;
  }
}
