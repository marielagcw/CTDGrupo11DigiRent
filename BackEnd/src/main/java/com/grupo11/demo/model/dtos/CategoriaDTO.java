package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Producto;

import java.util.HashSet;
import java.util.Set;

public class CategoriaDTO {
    private Integer id;
    private String titulo;
    private String descripcion;
    private String url;

    public CategoriaDTO() {
    }

    // GETTERS Y SETTERS
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
