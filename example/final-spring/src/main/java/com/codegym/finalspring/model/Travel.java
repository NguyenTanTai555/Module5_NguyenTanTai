package com.codegym.finalspring.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "travel")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Travel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "startDestination",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Car> cars1;
    @OneToMany(mappedBy = "endDestination",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Car> cars;
}
