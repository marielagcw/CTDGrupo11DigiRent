package com.grupo11.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "politicas")
public class Politica {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_tipo_politica;
    @Column(name = "titulo")
    private String titulo;
    @Column
    private String descripcion;
    @ManyToOne
    @JoinColumn(name = "id_tipo_politica", referencedColumnName = "id", nullable = false)
    private Set<TipoDePoliticas> tipoDePoliticas;

}
