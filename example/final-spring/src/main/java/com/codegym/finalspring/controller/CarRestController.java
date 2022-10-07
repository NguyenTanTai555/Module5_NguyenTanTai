package com.codegym.finalspring.controller;

import com.codegym.finalspring.model.Car;
import com.codegym.finalspring.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/car")
public class CarRestController {

    @Autowired
    private ICarService carService;

    @GetMapping("")
    public ResponseEntity<List<Car>> carList(){
        List<Car> cars = this.carService.findAllCar();
        if (cars.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cars,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> findCarById(@PathVariable Long id){
        Car car = carService.findCarById(id);
        if (car == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(car,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> saveCar(@RequestBody Car car){
        carService.saveCar(car);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/update")
    public ResponseEntity<Void> updateCar(@RequestBody Car car){
        carService.saveCar(car);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

//
}
