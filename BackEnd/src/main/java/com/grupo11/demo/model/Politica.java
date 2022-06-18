package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "politicas")
public class Politica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_politica;

    @Column(name = "titulo")
    private String titulo;

    @ManyToMany(mappedBy = "politicas")
    @JsonIgnore
    private Set<Producto> productos = new HashSet<>();

    @OneToMany(mappedBy = "politicas")
    @JsonIgnore
    private Set<ElementoPolitica> elementos = new HashSet<>();

    public Politica() {
    }

    public Politica(String titulo, Set<Producto> productos, Set<ElementoPolitica> elementos) {
        this.titulo = titulo;
        this.productos = productos;
        this.elementos = elementos;
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
