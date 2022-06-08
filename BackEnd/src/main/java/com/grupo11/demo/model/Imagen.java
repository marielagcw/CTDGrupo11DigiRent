package com.grupo11.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "imagenes")
public class Imagen {

    @Id
    @SequenceGenerator(name = "secuencia_imagenes", sequenceName = "secuencia_imagenes", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "secuencia_imagenes")
    private Integer id_imagen;
    @Column(name = "titulo")
    private String titulo;
    @Column(name = "url")
    private String url;
    @ManyToOne
    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto")
    private Producto productos;

}
