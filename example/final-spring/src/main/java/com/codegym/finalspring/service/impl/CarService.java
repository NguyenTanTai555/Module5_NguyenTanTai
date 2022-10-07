package com.codegym.finalspring.service.impl;

import com.codegym.finalspring.model.Car;
import com.codegym.finalspring.repository.ICarRepository;
import com.codegym.finalspring.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository carRepository;

    @Override
    public List<Car> findAllCar() {
        return carRepository.findAll();
    }

    @Override
    public Car findCarById(Long id) {
        return carRepository.findById(id).orElse(null);
    }

    @Override
    public void saveCar(Car car) {
        carRepository.save(car);
    }
}
