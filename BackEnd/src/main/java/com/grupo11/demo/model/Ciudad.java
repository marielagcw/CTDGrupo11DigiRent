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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public Ciudad(String nombre, String provincia, String pais, Set<Producto> productos) {
        this.nombre = nombre;
        this.provincia = provincia;
        this.pais = pais;
        this.productos = productos;
    }
}
