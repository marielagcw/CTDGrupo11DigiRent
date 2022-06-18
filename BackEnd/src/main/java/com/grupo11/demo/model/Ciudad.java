package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "ciudades")
public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_ciudad;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "provincia")
    private String provincia;

    @Column(name =  "pais")
    private String pais;

    @OneToMany(mappedBy = "ciudades")
    @JsonIgnore
    private Set<Producto> productos = new HashSet<>();

    public Ciudad() {
    }

    public Ciudad(String nombre, String provincia, String pais, Set<Producto> productos) {
        this.nombre = nombre;
        this.provincia = provincia;
        this.pais = pais;
        this.productos = productos;
    }

    public Integer getId_ciudad() {
        return id_ciudad;
    }

    public void setId_ciudad(Integer id_ciudad) {
        this.id_ciudad = id_ciudad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
