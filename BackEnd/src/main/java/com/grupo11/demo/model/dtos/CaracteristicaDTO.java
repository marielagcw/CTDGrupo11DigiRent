package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Producto;
import java.util.HashSet;
import java.util.Set;

public class CaracteristicaDTO {
    private Integer id;
    private String nombre;
    private Set<Producto> productos = new HashSet<>();
    private String icono;

    public CaracteristicaDTO() {
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


    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }

    public String getIcono() {
        return icono;
    }

    public void setIcono(String icono) {
        this.icono = icono;
    }
}
