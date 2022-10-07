package com.codegym.finalspring.service;

import com.codegym.finalspring.model.Car;

import java.util.List;

public interface ICarService {
    List<Car> findAllCar();

    Car findCarById(Long id);

    void saveCar(Car car);
}
