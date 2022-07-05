package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Politica;

public class ElementoPoliticaDTO {

    private Integer id;
    private String nombre;
    private Politica politica;

    public ElementoPoliticaDTO() {
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

    public Politica getPolitica() {
        return politica;
    }

    public void setPolitica(Politica politica) {
        this.politica = politica;
    }
}
