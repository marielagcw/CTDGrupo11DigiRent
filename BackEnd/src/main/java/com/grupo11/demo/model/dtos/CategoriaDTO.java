package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Producto;

import java.util.HashSet;
import java.util.Set;

public class CategoriaDTO {
    private Integer id_categoria;
    private String titulo;
    private String descripcion;
    private String url;
    private Set<Producto> productos = new HashSet<>();

    public CategoriaDTO() {
    }

    public Integer getId_categoria() {
        return id_categoria;
    }

    public void setId_categoria(Integer id_categoria) {
        this.id_categoria = id_categoria;
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

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
