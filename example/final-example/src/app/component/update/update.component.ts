import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../service/car.service";
import {CarCenter} from "../../model/carCenter";
import {Travel} from "../../model/travel";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Car} from "../../model/car";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  carForm: FormGroup;
  car: Car;
  id: number;
  carCenters: CarCenter[] = [];
  travels: Travel[] = [];
  travel: Travel = {};

  constructor(private carService: CarService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.carService.getAllTravel().subscribe(next => {
      this.travels = next;
    });
    this.carService.getAllCarCenter().subscribe(next => {
      this.carCenters = next;
    })
  }

  ngOnInit(): void {
    this.carService.findById(this.id).subscribe(car => {
      this.car = car;
      console.log(this.car)
      this.getCar()
    });
  }


  private getCar() {
    this.carForm = new FormGroup({
      id: new FormControl(this.car.id),
      typeCar: new FormControl(this.car.typeCar),
      carCenter: new FormGroup({
        id: new FormControl(this.car.carCenter.id, [Validators.required])
      }),
      startDestination: new FormGroup({
        id: new FormControl(this.car.startDestination.id, [Validators.required])
      }),
      endDestination: new FormGroup({
        id: new FormControl(this.car.endDestination.id, [Validators.required])
      }),
      phoneNumber: new FormControl(this.car.phoneNumber, [Validators.required]),
      email: new FormControl(this.car.email, [Validators.required, Validators.email]),
      startHouse: new FormControl(this.car.startHouse, [Validators.required]),
      endHouse: new FormControl(this.car.endHouse, [Validators.required]),
    })
  }

  updateCar() {
    let car = this.carForm.value;
    this.carService.updateCar(car).subscribe(() => {
      Swal.fire('Hoàn Tất', 'Update success', 'success');
      this.router.navigateByUrl("")
    }, error => {
      console.log(error);
    })
  }

  get typeCar() {
    return this.carForm.get('typeCar');
  }

  get carCenter() {
    return this.carForm.get('carType')
  }

}
