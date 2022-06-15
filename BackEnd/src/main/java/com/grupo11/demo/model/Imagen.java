package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
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
    //@JsonIgnore
    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto")
    private Producto productos;

    public Imagen(String titulo, String url, Producto producto) {
        this.titulo = titulo;
        this.url = url;
        this.productos = producto;
    }
}
