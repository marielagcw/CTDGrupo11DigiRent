package com.grupo11.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

//@Getter
//@Setter
@NoArgsConstructor
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

    public ElementoPolitica(String nombre, Politica politicas) {
        this.nombre = nombre;
        this.politicas = politicas;
    }

    public Integer getId_elementos_politica() {
        return id_elementos_politica;
    }
}
