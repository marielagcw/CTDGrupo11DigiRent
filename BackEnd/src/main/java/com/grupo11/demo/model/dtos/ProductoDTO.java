package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

//@Getter
@NoArgsConstructor
public class ProductoDTO {

    private Integer id_producto;
    private String nombre_producto;
    private String titulo_descripcion;
    private String descripcion;
    private Set<Imagen> imagenes = new HashSet<>();
    private Categoria categorias;
    private Ciudad ciudades;
    private Set<Caracteristica> caracteristicas = new HashSet<>();
    private Set<Politica> politicas = new HashSet<>();

    public void setId_producto(Integer id_producto) {
        this.id_producto = id_producto;
    }

    public void setNombre_producto(String nombre_producto) {
        this.nombre_producto = nombre_producto;
    }

    public void setTitulo_descripcion(String titulo_descripcion) {
        this.titulo_descripcion = titulo_descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setCategorias(Categoria categorias) {
        this.categorias = categorias;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public void setCiudades(Ciudad ciudades) {
        this.ciudades = ciudades;
    }

    public void setPoliticas(Set<Politica> politicas) {
        this.politicas = politicas;
    }
}
