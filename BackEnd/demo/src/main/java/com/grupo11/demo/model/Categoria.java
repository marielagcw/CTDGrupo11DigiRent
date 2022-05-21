package com.grupo11.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "Categorias")
public class Categoria {
    @Id
    @GeneratedValue
    private Integer id;
    @Column
    private String titulo;
    @Column
    private String descripcion;
    @Column
    private String urlImangen;

     public Categoria(){

     }

    public Categoria(String titulo, String descripcion, String urlImangen) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImangen = urlImangen;
    }

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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrlImangen() {
        return urlImangen;
    }

    public void setUrlImangen(String urlImangen) {
        this.urlImangen = urlImangen;
    }
}
