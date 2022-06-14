package com.grupo11.demo.model.dtos;

//import com.grupo11.demo.model.Producto;

import com.grupo11.demo.model.Producto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
public class CategoriaDTO {
    private Integer id_categoria;
    private String titulo;
    private String descripcion;
    private String url;
    private Set<Producto> productos = new HashSet<>();

    public void setId_categoria(Integer id_categoria) {
        this.id_categoria = id_categoria;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
