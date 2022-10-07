package com.codegym.finalspring.service.impl;

import com.codegym.finalspring.model.CarCenter;
import com.codegym.finalspring.repository.ICarCenterRepository;
import com.codegym.finalspring.service.ICarCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CarCenterService implements ICarCenterService {
    @Autowired
    private ICarCenterRepository carCenterRepository;
    @Override
    public List<CarCenter> findAllCarCenter() {
        return carCenterRepository.findAll();
    }

    @Override
    public CarCenter findByIdCarCenter(Long id) {
        return carCenterRepository.findById(id).orElse(null);
    }

    @Override
    public void saveCarCenter(CarCenter carCenter) {
        carCenterRepository.save(carCenter);
    }
}
