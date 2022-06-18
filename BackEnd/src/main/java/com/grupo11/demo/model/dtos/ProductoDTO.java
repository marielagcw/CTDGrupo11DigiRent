package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.*;

import java.util.HashSet;
import java.util.Set;

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
    private Set<Reserva> reservas = new HashSet<>();

    public ProductoDTO() {
    }

    public Integer getId_producto() {
        return id_producto;
    }

    public void setId_producto(Integer id_producto) {
        this.id_producto = id_producto;
    }

    public String getNombre_producto() {
        return nombre_producto;
    }

    public void setNombre_producto(String nombre_producto) {
        this.nombre_producto = nombre_producto;
    }

    public String getTitulo_descripcion() {
        return titulo_descripcion;
    }

    public void setTitulo_descripcion(String titulo_descripcion) {
        this.titulo_descripcion = titulo_descripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public Categoria getCategorias() {
        return categorias;
    }

    public void setCategorias(Categoria categorias) {
        this.categorias = categorias;
    }

    public Ciudad getCiudades() {
        return ciudades;
    }

    public void setCiudades(Ciudad ciudades) {
        this.ciudades = ciudades;
    }

    public Set<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Set<Politica> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(Set<Politica> politicas) {
        this.politicas = politicas;
    }
}
