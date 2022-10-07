package com.codegym.finalspring.service.impl;

import com.codegym.finalspring.model.Travel;
import com.codegym.finalspring.repository.ITravelRepository;
import com.codegym.finalspring.service.ITravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TravelService implements ITravelService {
    @Autowired
    private ITravelRepository travelRepository;

    @Override
    public List<Travel> findAllTravel() {
        return travelRepository.findAll();
    }

    @Override
    public Travel findByIdTravel(Long id) {
        return travelRepository.findById(id).orElse(null);
    }

    @Override
    public void saveTravel(Travel travel) {
        travelRepository.save(travel);
    }
}
