package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Producto;
import java.util.HashSet;
import java.util.Set;

public class CaracteristicaDTO {
    private Integer id_caracteristica;
    private String nombre;
    private Boolean estaDiponible;
    private Set<Producto> productos = new HashSet<>();

    public CaracteristicaDTO() {
    }


    public Integer getId_caracteristica() {
        return id_caracteristica;
    }

    public void setId_caracteristica(Integer id_caracteristica) {
        this.id_caracteristica = id_caracteristica;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Boolean getEstaDiponible() {
        return estaDiponible;
    }

    public void setEstaDiponible(Boolean estaDiponible) {
        this.estaDiponible = estaDiponible;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}