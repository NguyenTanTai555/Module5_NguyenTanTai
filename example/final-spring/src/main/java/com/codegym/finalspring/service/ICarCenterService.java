package com.codegym.finalspring.service;

import com.codegym.finalspring.model.CarCenter;

import java.util.List;

public interface ICarCenterService {
    List<CarCenter> findAllCarCenter();

    CarCenter findByIdCarCenter(Long id);

    void saveCarCenter(CarCenter carCenter);
}
