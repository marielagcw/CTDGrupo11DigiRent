package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "politicas")
public class Politica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_politica")
    private Integer id;

    @Column(name = "titulo")
    private String titulo;

    @ManyToMany(mappedBy = "politicas")
    @JsonIgnore
    private Set<Producto> productos = new HashSet<>();

    @OneToMany(mappedBy = "politica")
    @JsonManagedReference
    private Set<ElementoPolitica> elementos = new HashSet<>();

    // CONSTRUCTORES
    public Politica() {
    }

    public Politica(String titulo, Set<Producto> productos, Set<ElementoPolitica> elementos) {
        this.titulo = titulo;
        this.productos = productos;
        this.elementos = elementos;
    }

    // GETTERS Y SETTERS

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
