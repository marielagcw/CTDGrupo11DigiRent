package com.grupo11.demo.model.dtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.grupo11.demo.model.ElementoPolitica;
import com.grupo11.demo.model.Producto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class PoliticaDTO {

    private Integer id_politica;
    private String titulo;
    private Set<Producto> productos = new HashSet<>();
    private Set<ElementoPolitica> elementos = new HashSet<>();

    public void setId_politica(Integer id_politica) {
        this.id_politica = id_politica;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
