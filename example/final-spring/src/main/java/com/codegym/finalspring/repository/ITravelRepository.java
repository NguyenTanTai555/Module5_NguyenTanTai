package com.codegym.finalspring.repository;

import com.codegym.finalspring.model.Travel;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface ITravelRepository extends JpaRepository<Travel,Long> {
}
