package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Producto;


public class ImagenDTO {

    private Integer id_imagen;
    private String titulo;
    private String url;
    private Producto productos;

    public ImagenDTO() {
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
