package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Producto;

import java.util.HashSet;
import java.util.Set;

public class CiudadDTO {

    private Integer id;
    private String nombre;
    private String provincia;
    private String pais;
    private Set<Producto> productos = new HashSet<>();

    public CiudadDTO() {
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

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
