package com.codegym.finalspring.controller;

import com.codegym.finalspring.model.Travel;
import com.codegym.finalspring.service.ITravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/travel")
public class TravelRestController {

    @Autowired
    private ITravelService travelService;

    @GetMapping("")
    public ResponseEntity<List<Travel>> listTravel(){
        List<Travel> travels = this.travelService.findAllTravel();
        if (travels.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(travels,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Travel> findTravel(@PathVariable Long id){
        Travel travel = travelService.findByIdTravel(id);
        if (travel==null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(travel,HttpStatus.OK);
    }

}
