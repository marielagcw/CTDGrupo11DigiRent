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
    @Column(name="id_producto")
    private Integer id;

    @Column(name = "nombre_producto")
    private String nombreProducto;

    @Column(name = "titulo_descripcion")
    private String tituloDescripcion;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "direccion")
    private String direccion;

    @OneToMany(mappedBy = "producto")
    @JsonManagedReference
    private Set<Imagen> imagenes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "categorias_id_categoria", referencedColumnName = "id_categoria")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(
            name = "ciudades_id_ciudad", referencedColumnName = "id_ciudad")
    private Ciudad ciudad;

    @ManyToMany
    @JoinTable(name = "productos_has_caracteristicas", joinColumns = @JoinColumn(name = "productos_id_producto"), inverseJoinColumns = @JoinColumn(name = "caracteristicas_id_caracteristica"))
    private Set<Caracteristica> caracteristicas = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "productos_has_politicas", joinColumns = @JoinColumn(name = "productos_id_producto"), inverseJoinColumns = @JoinColumn(name = "politicas_id_politica"))
    private Set<Politica> politicas = new HashSet<>();

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private Set<Reserva> reservas = new HashSet<>();

    // CONSTRUCTORES
    public Producto() {
    }

    public Producto(String nombreProducto, String tituloDescripcion, String descripcion, String direccion, Set<Imagen> imagenes, Categoria categoria, Ciudad ciudad, Set<Caracteristica> caracteristicas, Set<Politica> politicas, Set<Reserva> reservas) {
        this.nombreProducto = nombreProducto;
        this.tituloDescripcion = tituloDescripcion;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.imagenes = imagenes;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.caracteristicas = caracteristicas;
        this.politicas = politicas;
        this.reservas = reservas;
    }

    // GETTERS Y SETTERS

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getTituloDescripcion() {
        return tituloDescripcion;
    }

    public void setTituloDescripcion(String tituloDescripcion) {
        this.tituloDescripcion = tituloDescripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
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
