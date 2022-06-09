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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_politica;
    @Column(name = "titulo")
    private String titulo;
    @ManyToMany(mappedBy = "politicas")
    @JsonIgnore
    private Set<Producto> productos = new HashSet<>();

//    @OneToMany(mappedBy = "politica")
//    private ElementoPolitica elementos;


}
