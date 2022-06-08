package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Caracteristica;
import com.grupo11.demo.model.Categoria;
import com.grupo11.demo.model.Ciudad;
import com.grupo11.demo.model.Imagen;
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
    private String nombre;
    private String descripcion;
    private Categoria categorias;
    private Set<Caracteristica> caracteristicas = new HashSet<>();
    private Set<Imagen> imagenes = new HashSet<>();
    private Ciudad ciudades;

    public void setNombre(String nombre) {
        this.nombre = nombre;
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
}
