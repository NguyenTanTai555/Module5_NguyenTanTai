import {Component, OnInit} from '@angular/core';
import {CarService} from "../../service/car.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Travel} from "../../model/travel";
import {CarCenter} from "../../model/carCenter";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  carForm: FormGroup = new FormGroup({
    id: new FormControl(),
    typeCar: new FormControl('', [Validators.required]),
    carCenter: new FormGroup({
      id: new FormControl()
    }),
    startDestination: new FormGroup({
      id: new FormControl('', [Validators.required])
    }),
    endDestination: new FormGroup({
      id: new FormControl("", [Validators.required])
    }),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    startHouse: new FormControl('', [Validators.required]),
    endHouse: new FormControl('', [Validators.required])
  });
  travels: Travel[] = [];
  carCenters: CarCenter[] = []

  constructor(private carService: CarService,
              private router: Router) {
    this.carService.getAllCarCenter().subscribe(next => {
      this.carCenters = next;
    })
    this.carService.getAllTravel().subscribe(next => {
      this.travels = next;
      console.log(next)
    })
  }

  ngOnInit(): void {
  }

  createCar() {
    var car = this.carForm.value;
    this.carService.saveCar(car).subscribe(() => {
      Swal.fire('Tiêu đề', 'Tạo mới thành công', 'success');
      this.router.navigateByUrl('')
    })
  }
  get typeCar(){
    return this.carForm.get('typeCar');
  }
}
