package com.grupo11.demo.model.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;


//No utilizo setter para que el setter de id no se genere
@Getter
@NoArgsConstructor
public class CategoriaDTO {
    private Integer id;
    private String titulo;
    private String descripcion;
    private String urlImangen;



    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setUrlImangen(String urlImangen) {
        this.urlImangen = urlImangen;
    }
}
