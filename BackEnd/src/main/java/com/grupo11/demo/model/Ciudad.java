package com.grupo11.demo.model;

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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_ciudad;
    @Column
    private String nombre;
    @Column
    private String provincia;
    @Column
    private String pais;
    @OneToMany
    private Set<Producto> productos = new HashSet<>();


}
