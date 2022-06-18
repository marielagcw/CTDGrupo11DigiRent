package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Politica;

public class ElementoPoliticaDTO {

    private Integer id_elementos_politica;
    private String nombre;
    private Politica politicas;

    public ElementoPoliticaDTO() {
    }

    public Integer getId_elementos_politica() {
        return id_elementos_politica;
    }

    public void setId_elementos_politica(Integer id_elementos_politica) {
        this.id_elementos_politica = id_elementos_politica;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Politica getPoliticas() {
        return politicas;
    }

    public void setPoliticas(Politica politicas) {
        this.politicas = politicas;
    }
}
