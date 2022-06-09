package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "politicas")
public class Politica {

    @Id
    @SequenceGenerator(name = "secuencia_politicas", sequenceName = "secuencia_politicas", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "secuencia_politicas")
    private Integer id_politica;

    @Column(name = "titulo")
    private String titulo;

    @ManyToMany(mappedBy = "politicas")
    private Set<Producto> productos = new HashSet<>();

//    @OneToMany(mappedBy = "politica")
    //@JsonIgnore
//    private ElementoPolitica elementos;


}
