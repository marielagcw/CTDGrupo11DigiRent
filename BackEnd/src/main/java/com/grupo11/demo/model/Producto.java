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
@Table(name = "productos")
public class Producto {

    @Id
    @SequenceGenerator(name = "secuencia_categorias", sequenceName = "secuencia_categorias", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "secuencia_categorias")
    private Integer id_producto;

    @Column(name = "nombre_producto")
    private String nombre_producto;

    @Column(name = "titulo_descripcion")
    private String titulo_descripcion;

    @Column(name = "descripcion")
    private String descripcion;

    @OneToMany(mappedBy = "productos")
    @JsonIgnore
    private Set<Imagen> imagenes;

    @ManyToOne
    @JoinColumn(name = "id_categoria", referencedColumnName = "id_categoria")
    private Categoria categorias;

    @ManyToOne
    @JoinColumn(name = "id_ciudad", referencedColumnName = "id_ciudad")
    private Ciudad ciudades;

    @ManyToMany
    @JsonIgnore
    @JoinTable(name = "productos_has_caracteristicas", joinColumns = @JoinColumn(name = "id_producto"), inverseJoinColumns = @JoinColumn(name = "id_caracteristica"))
    private Set<Caracteristica> caracteristicas;

    @ManyToMany
    @JsonIgnore
    @JoinTable(name = "productos_has_politicas", joinColumns = @JoinColumn(name = "id_producto"), inverseJoinColumns = @JoinColumn(name = "id_politica"))
    private Set<Politica> politicas;

}
