package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Politica;
import lombok.Getter;
import lombok.NoArgsConstructor;


//@Getter
@NoArgsConstructor
public class ElementoPoliticaDTO {

    private Integer id_elementos_politica;
    private String nombre;
    private Politica politicas;

    public void setId_elementos_politica(Integer id_elementos_politica) {
        this.id_elementos_politica = id_elementos_politica;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
