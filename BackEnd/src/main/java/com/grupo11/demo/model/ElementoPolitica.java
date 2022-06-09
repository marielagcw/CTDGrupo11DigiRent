package com.grupo11.demo.model;

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
    @SequenceGenerator(name = "secuencia_e_politicas", sequenceName = "secuencia_e_politicas", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "secuencia_e_politicas")
    private Integer id_elementosPolitica;

    @Column(name = "nombre")
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "id_politica", referencedColumnName = "id_politica")
    private Politica politicas;


}
