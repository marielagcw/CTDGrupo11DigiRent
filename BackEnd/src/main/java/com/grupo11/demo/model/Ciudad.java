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
@Table(name = "ciudades")
public class Ciudad {

    @Id
    @SequenceGenerator(name = "secuencia_ciudades", sequenceName = "secuencia_ciudades", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "secuencia_ciudades")
    private Integer id_ciudad;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "provincia")
    private String provincia;

    @Column(name =  "pais")
    private String pais;

    @OneToMany(mappedBy = "ciudades")
    @JsonIgnore
    private Set<Producto> productos = new HashSet<>();


}
