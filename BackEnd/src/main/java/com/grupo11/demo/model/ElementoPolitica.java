package com.grupo11.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "elementos_politicas")
public class ElementoPolitica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_elementos_politica;

    @Column(name = "nombre")
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "politicas_id_politica", referencedColumnName = "id_politica", nullable = false)
    private Politica politicas;

    public ElementoPolitica() {
    }

    public ElementoPolitica(String nombre, Politica politicas) {
        this.nombre = nombre;
        this.politicas = politicas;
    }

    public Integer getId_elementos_politica() {
        return id_elementos_politica;
    }

    public void setId_elementos_politica(Integer id_elementos_politica) {
        this.id_elementos_politica = id_elementos_politica;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Politica getPoliticas() {
        return politicas;
    }

    public void setPoliticas(Politica politicas) {
        this.politicas = politicas;
    }
}
