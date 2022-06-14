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
@Table(name = "elementosPoliticas")
public class ElementoPolitica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_elementosPolitica;

    @Column(name = "nombre")
    private String nombre;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_politica", referencedColumnName = "id_politica")
    private Politica politicas;

    public ElementoPolitica(String nombre, Politica politicas) {
        this.nombre = nombre;
        this.politicas = politicas;
    }
}
