package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Politica;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Set;

@Getter
@NoArgsConstructor
public class ElementoPoliticaDTO {

    private Integer id_elementosPolitica;
    private String nombre;
    private Set<Politica> politicas;

    public void setId_elementosPolitica(Integer id_elementosPolitica) {
        this.id_elementosPolitica = id_elementosPolitica;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setPoliticas(Set<Politica> politicas) {
        this.politicas = politicas;
    }
}
