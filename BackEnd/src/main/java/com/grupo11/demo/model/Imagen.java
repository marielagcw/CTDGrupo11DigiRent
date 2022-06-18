package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_imagen;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "url")
    private String url;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "productos_id_producto", referencedColumnName = "id_producto", nullable = false)
    private Producto productos;

    public Imagen() {
    }

    public Imagen(String titulo, String url, Producto producto) {
        this.titulo = titulo;
        this.url = url;
        this.productos = producto;
    }

    public Integer getId_imagen() {
        return id_imagen;
    }

    public void setId_imagen(Integer id_imagen) {
        this.id_imagen = id_imagen;
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

    public Producto getProductos() {
        return productos;
    }

    public void setProductos(Producto productos) {
        this.productos = productos;
    }
}
