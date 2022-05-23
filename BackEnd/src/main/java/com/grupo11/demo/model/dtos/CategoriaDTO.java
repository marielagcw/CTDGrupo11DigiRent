package com.grupo11.demo.model.dtos;

import javax.persistence.Column;

public class CategoriaDTO {
    private Integer id;
    private String titulo;
    private String descripcion;
    private String urlImangen;


    public CategoriaDTO(){


    }

    public Integer getId() {
        return id;
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

    public String getUrlImangen() {
        return urlImangen;
    }

    public void setUrlImangen(String urlImangen) {
        this.urlImangen = urlImangen;
    }
}
