package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id_producto;

    @Column(name = "nombre_producto")
    private String nombre_producto;

    @Column(name = "titulo_descripcion")
    private String titulo_descripcion;

    @Column(name = "descripcion")
    private String descripcion;

    @OneToMany(mappedBy = "productos")
    @JsonManagedReference
    private Set<Imagen> imagenes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "id_categoria", referencedColumnName = "id_categoria")
    private Categoria categorias;

    @ManyToOne
    @JoinColumn(name = "id_ciudad", referencedColumnName = "id_ciudad")
    private Ciudad ciudades;

    @ManyToMany
    @JoinTable(name = "productos_has_caracteristicas", joinColumns = @JoinColumn(name = "id_producto"), inverseJoinColumns = @JoinColumn(name = "id_caracteristica"))
    private Set<Caracteristica> caracteristicas;

    @ManyToMany
    @JoinTable(name = "productos_has_politicas", joinColumns = @JoinColumn(name = "id_producto"), inverseJoinColumns = @JoinColumn(name = "id_politica"))
    private Set<Politica> politicas;

    @OneToMany(mappedBy = "productos")
    @JsonIgnore
    private Set<Reserva> reservas;

    public Producto(String nombre_producto, String titulo_descripcion, String descripcion, Set<Imagen> imagenes, Categoria categorias, Ciudad ciudades, Set<Caracteristica> caracteristicas, Set<Politica> politicas) {
        this.nombre_producto = nombre_producto;
        this.titulo_descripcion = titulo_descripcion;
        this.descripcion = descripcion;
        this.imagenes = imagenes;
        this.categorias = categorias;
        this.ciudades = ciudades;
        this.caracteristicas = caracteristicas;
        this.politicas = politicas;
    }
}
