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
    @Column(name = "titulo")
    private String nombre;
    @Column(name = "descripcion")
    private String descripcion;
//    @OneToMany
//    private Set<Politica> politicas = new HashSet<>();
    @JsonIgnore
    @OneToMany(mappedBy = "productos")
    private Set<Imagen> imagenes;
    @ManyToOne
    @JoinColumn(name = "id_categoria", referencedColumnName = "id_categoria", nullable = false)
    private Categoria categorias;
    @ManyToOne
    @JoinColumn(name = "id_ciudad", referencedColumnName = "id_ciudad", nullable = false)
    private Ciudad ciudad;
//    @ManyToMany
//    @JoinTable(name = "productos_has_caracteristicas", joinColumns = @JoinColumn(name = "id_producto"), inverseJoinColumns = @JoinColumn(name = "id_caracteristica"))
//    private Caracteristica caracteristicas;

}
