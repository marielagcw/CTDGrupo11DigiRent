package com.grupo11.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "elementos_politicas")
public class ElementoPolitica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_elementos_politica")
    private Integer id;

    @Column(name = "nombre")
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "politicas_id_politica", referencedColumnName = "id_politica", nullable = false)
    private Politica politica;

    // CONSTRUCTORES
    public ElementoPolitica() {
    }

    public ElementoPolitica(String nombre, Politica politica) {
        this.nombre = nombre;
        this.politica = politica;
    }

    // GETTERS Y SETTERS

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Politica getPolitica() {
        return politica;
    }

    public void setPolitica(Politica politica) {
        this.politica = politica;
    }
}
