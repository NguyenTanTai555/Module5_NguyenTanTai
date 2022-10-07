package com.codegym.finalspring.repository;

import com.codegym.finalspring.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface ICarRepository extends JpaRepository<Car,Long> {
    @Query(value = "SELECT * FROM car", nativeQuery = true, countQuery = "SELECT count(*) FROM car")
    Page<Car> getAll(Pageable pageable);

    @Modifying
    @Query(value = "delete FROM car where car.id = :id", nativeQuery = true)
    void deleteByQuery(@Param("id") Long id);

    @Query(value = "select * from car where car.id=:id",nativeQuery = true)
    Optional<Car> findById(@Param("id")Long id);

    @Transactional
    @Modifying
    @Query(value = "Insert into car(car.id,car.typeCar,car.carCenter.id,car.travel.id,car.travel.id,car.phoneNumber,car.email,car.startHouse,car.endHouse)"+
    "values(?1,?2,?3,?4,?5,?6,?7,)",nativeQuery = true)
    void createCar(Long id ,String typeCar, String startDestination,String endDestination,String startHouse,
                   String endHouse,Long car);
}
