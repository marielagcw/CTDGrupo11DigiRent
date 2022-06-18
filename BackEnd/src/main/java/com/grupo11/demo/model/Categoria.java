package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

//@Getter
//@Setter
@NoArgsConstructor
@Entity
@Table(name = "categorias")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_categoria;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "url")
    private String url;

    @OneToMany(mappedBy = "categorias")
    @JsonIgnore
    private Set<Producto> productos;

    public Categoria(String titulo, String descripcion, String url, Set<Producto> productos) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
        this.productos = productos;
    }

    public Integer getId_categoria() {
        return id_categoria;
    }
}
