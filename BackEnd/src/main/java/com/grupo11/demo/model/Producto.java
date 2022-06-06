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
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_producto;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "descripcion")
    private String descripcion;
    @OneToMany
    private Set<Politica> politicas = new HashSet<>();
    @OneToMany(mappedBy = "productos")
    private Set<Imagen> imagenes;
    @ManyToOne
    @JoinColumn(name = "id_categoria", referencedColumnName = "id", nullable = false)
    private Set<Categoria> categorias;
    @ManyToOne
    @JoinColumn(name = "id_ciudad", referencedColumnName = "id", nullable = false)
    private Ciudad ciudad;
    @ManyToMany
    @JoinTable(name = "productos_has_caracteristicas", joinColumns = @JoinColumn(name = "id_producto"), inverseJoinColumns = @JoinColumn(name = "id_caracteristica"))
    private Caracteristica caracteristicas;

}
