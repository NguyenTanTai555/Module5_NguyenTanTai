package com.codegym.finalspring.service;

import com.codegym.finalspring.model.Travel;

import java.util.List;

public interface ITravelService {
    List<Travel> findAllTravel();

    Travel findByIdTravel(Long id);

    void saveTravel(Travel travel);
}
