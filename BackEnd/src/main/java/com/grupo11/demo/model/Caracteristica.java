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
    @GeneratedValue(strategy = GenerationType.IDENTITY) //TODO Se quita el secuenciador y se deja que Hibernate copie el sistema de IDs que establece la base de datos
    private Integer id_caracteristica;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "esta_disponible")
    private Boolean estaDisponible; // TODO → Hay un problema, sea true o false se guarda siempre como null en la base de datos =(

    @ManyToMany(mappedBy = "caracteristicas")
    //@JsonIgnore
    private Set<Producto> productos = new HashSet<>();

    public Caracteristica(String nombre, Boolean estaDisponible, Set<Producto> productos) {
        this.nombre = nombre;
        this.estaDisponible = estaDisponible;
        this.productos = productos;
    }
}
