package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "caracterisicas")
public class Caracteristica {

    @Id
    @SequenceGenerator(name = "secuencia_caracteristicas", sequenceName = "secuencia_caracteristicas", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "secuencia_caracteristicas")
    private Integer id_caracterisica;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "estaDisponible")
    private Boolean estaDisponible;
//    @ManyToMany(mappedBy = "caracteristicas")
//    @JsonIgnore
//    private Set<Producto> productos = new HashSet<>();
}
