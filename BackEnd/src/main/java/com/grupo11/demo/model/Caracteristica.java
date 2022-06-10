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
@Table(name = "caracteristicas")
public class Caracteristica {

    @Id
    @SequenceGenerator(name = "secuencia_caracteristicas", sequenceName = "secuencia_caracteristicas", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "secuencia_caracteristicas")
    private Integer id_caracteristica;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "esta_disponible")
    private Boolean estaDisponible;

    @ManyToMany(mappedBy = "caracteristicas")
    private Set<Producto> productos = new HashSet<>();

    public Caracteristica(String nombre, Boolean estaDisponible, Set<Producto> productos) {
        this.nombre = nombre;
        this.estaDisponible = estaDisponible;
        this.productos = productos;
    }
}
