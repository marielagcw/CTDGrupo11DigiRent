package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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
    @JoinColumn(name = "categorias_id_categoria", referencedColumnName = "id_categoria")
    private Categoria categorias;

    @ManyToOne
    @JoinColumn(name = "ciudades_id_ciudad", referencedColumnName = "id_ciudad")
    private Ciudad ciudades;

    @ManyToMany
    @JoinTable(name = "productos_has_caracteristicas", joinColumns = @JoinColumn(name = "productos_id_producto"), inverseJoinColumns = @JoinColumn(name = "caracteristicas_id_caracteristica"))
    private Set<Caracteristica> caracteristicas;

    @ManyToMany
    @JoinTable(name = "productos_has_politicas", joinColumns = @JoinColumn(name = "productos_id_producto"), inverseJoinColumns = @JoinColumn(name = "politicas_id_politica"))
    private Set<Politica> politicas;

    @OneToMany(mappedBy = "productos")
    @JsonIgnore
    private Set<Reserva> reservas;

    public Producto() {
    }

    public Producto(String nombre_producto, String titulo_descripcion, String descripcion, Set<Imagen> imagenes, Categoria categorias, Ciudad ciudades, Set<Caracteristica> caracteristicas, Set<Politica> politicas, Set<Reserva> reservas) {
        this.nombre_producto = nombre_producto;
        this.titulo_descripcion = titulo_descripcion;
        this.descripcion = descripcion;
        this.imagenes = imagenes;
        this.categorias = categorias;
        this.ciudades = ciudades;
        this.caracteristicas = caracteristicas;
        this.politicas = politicas;
        this.reservas = reservas;
    }

    public Integer getId_producto() {
        return id_producto;
    }

    public void setId_producto(Integer id_producto) {
        this.id_producto = id_producto;
    }

    public String getNombre_producto() {
        return nombre_producto;
    }

    public void setNombre_producto(String nombre_producto) {
        this.nombre_producto = nombre_producto;
    }

    public String getTitulo_descripcion() {
        return titulo_descripcion;
    }

    public void setTitulo_descripcion(String titulo_descripcion) {
        this.titulo_descripcion = titulo_descripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public Categoria getCategorias() {
        return categorias;
    }

    public void setCategorias(Categoria categorias) {
        this.categorias = categorias;
    }

    public Ciudad getCiudades() {
        return ciudades;
    }

    public void setCiudades(Ciudad ciudades) {
        this.ciudades = ciudades;
    }

    public Set<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Set<Politica> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(Set<Politica> politicas) {
        this.politicas = politicas;
    }

    public Set<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reserva> reservas) {
        this.reservas = reservas;
    }
}
