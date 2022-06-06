package com.grupo11.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tipo_politicas")
public class TipoDePoliticas {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_tipo_peliculas;
    @Column
    private String tipo;
}
