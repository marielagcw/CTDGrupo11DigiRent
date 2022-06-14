package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Producto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
public class PoliticaDTO {

    private Integer id_politica;
    private String titulo;
    private String descripcion;
    private Set<Producto> productos = new HashSet<>();

    public void setId_politica(Integer id_politica) {
        this.id_politica = id_politica;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
