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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_politica;

    @Column(name = "titulo")
    private String titulo;

    @ManyToMany(mappedBy = "politicas")
    @JsonIgnore
    private Set<Producto> productos = new HashSet<>();

    @OneToMany(mappedBy = "politicas")
    private Set<ElementoPolitica> elementos = new HashSet<>();

    public Politica(String titulo, Set<Producto> productos, Set<ElementoPolitica> elementos) {
        this.titulo = titulo;
        this.productos = productos;
        this.elementos = elementos;
    }

}
