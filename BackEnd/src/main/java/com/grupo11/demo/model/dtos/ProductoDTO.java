package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
public class ProductoDTO {

    private Integer id_producto;
    private String titulo;
    private String descripcion;
    private Set<Imagen> imagenes = new HashSet<>();
    private Categoria categorias;
    private Ciudad ciudades;
    private Set<Caracteristica> caracteristicas = new HashSet<>();
    private Set<Politica> politicas = new HashSet<>();

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setCategorias(Categoria categorias) {
        this.categorias = categorias;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public void setCiudades(Ciudad ciudades) {
        this.ciudades = ciudades;
    }

    public void setPoliticas(Set<Politica> politicas) {
        this.politicas = politicas;
    }
}
