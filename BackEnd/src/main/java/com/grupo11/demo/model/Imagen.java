package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_imagen")
    private Integer id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "url")
    private String url;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "productos_id_producto", referencedColumnName = "id_producto", nullable = false)
    private Producto producto;

    // CONSTRUCTORES
    public Imagen() {
    }

    public Imagen(String titulo, String url, Producto producto) {
        this.titulo = titulo;
        this.url = url;
        this.producto = producto;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
