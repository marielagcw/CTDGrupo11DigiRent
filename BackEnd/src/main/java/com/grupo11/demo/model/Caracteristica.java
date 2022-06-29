package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "caracteristicas")
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_caracteristica")
    private Integer id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "esta_disponible")
    private Boolean estaDisponible; // TODO → Hay un problema, sea true o false se guarda siempre como null en la base de datos =(

    @ManyToMany(mappedBy = "caracteristicas")
    @JsonIgnore
    private Set<Producto> productos = new HashSet<>();

    // CONSTRUCTORES
    public Caracteristica() {
    }

    public Caracteristica(String nombre, Boolean estaDisponible, Set<Producto> productos) {
        this.nombre = nombre;
        this.estaDisponible = estaDisponible;
        this.productos = productos;
    }

    // GETTERS Y SETTERS

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Boolean getEstaDisponible() {
        return estaDisponible;
    }

    public void setEstaDisponible(Boolean estaDisponible) {
        this.estaDisponible = estaDisponible;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
