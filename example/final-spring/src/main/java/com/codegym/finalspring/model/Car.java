package com.codegym.finalspring.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "car")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String typeCar;
    @ManyToOne
    @JoinColumn(name = "car_center_id", referencedColumnName = "id")
    private CarCenter carCenter;
    @ManyToOne
    @JoinColumn(name = "start_destination_id", referencedColumnName = "id")
    private Travel startDestination;
    @ManyToOne
    @JoinColumn(name = "end_destination_id", referencedColumnName = "id")
    private Travel endDestination;

    private String phoneNumber;
    private String email;
    private String startHouse;
    private String endHouse;
}
