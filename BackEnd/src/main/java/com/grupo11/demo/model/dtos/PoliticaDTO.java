package com.grupo11.demo.model.dtos;
import com.grupo11.demo.model.ElementoPolitica;
import com.grupo11.demo.model.Producto;

import java.util.HashSet;
import java.util.Set;


public class PoliticaDTO {

    private Integer id_politica;
    private String titulo;
    private Set<Producto> productos = new HashSet<>();
    private Set<ElementoPolitica> elementos = new HashSet<>();

    public PoliticaDTO() {
    }

    public Integer getId_politica() {
        return id_politica;
    }

    public void setId_politica(Integer id_politica) {
        this.id_politica = id_politica;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }

    public Set<ElementoPolitica> getElementos() {
        return elementos;
    }

    public void setElementos(Set<ElementoPolitica> elementos) {
        this.elementos = elementos;
    }
}
