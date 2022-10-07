package com.codegym.finalspring.repository;

import com.codegym.finalspring.model.CarCenter;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface ICarCenterRepository extends JpaRepository<CarCenter,Long> {
}
