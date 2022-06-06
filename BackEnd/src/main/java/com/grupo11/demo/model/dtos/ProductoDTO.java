package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Categoria;
import com.grupo11.demo.model.Imagen;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.Set;

@Getter
@NoArgsConstructor
public class ProductoDTO {

    private Integer id_producto;
    private String nombre;
    private String descripcion;
    private Set<Imagen> imagenes;
    private Set<Categoria> categorias;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public void setCategorias(Set<Categoria> categorias) {
        this.categorias = categorias;
    }
}
