package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Producto;

import java.util.HashSet;
import java.util.Set;

public class CiudadDTO {

    private Integer id_ciudad;
    private String nombre;
    private String provincia;
    private String pais;
    private Set<Producto> productos = new HashSet<>();

    public CiudadDTO() {
    }

    public Integer getId_ciudad() {
        return id_ciudad;
    }

    public void setId_ciudad(Integer id_ciudad) {
        this.id_ciudad = id_ciudad;
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
