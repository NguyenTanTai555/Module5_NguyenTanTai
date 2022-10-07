package com.codegym.finalspring.controller;

import com.codegym.finalspring.model.CarCenter;
import com.codegym.finalspring.service.ICarCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/carCenter")
public class CarCenterRestController {
    @Autowired
    private ICarCenterService carCenterService;

    @GetMapping("")
    public ResponseEntity<List<CarCenter>> listCarCenter(){
        List<CarCenter> carCenters = this.carCenterService.findAllCarCenter();
        if (carCenters.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carCenters,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarCenter> findCarCenter(@PathVariable Long id){
        CarCenter carCenter = carCenterService.findByIdCarCenter(id);
        if (carCenter== null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carCenter,HttpStatus.OK);
    }
}
