package com.grupo11.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "Categorias")
public class Categoria {
    @Id
    @GeneratedValue
    private Integer id;
    @Column
    private String titulo;
    @Column
    private String descripcion;
    @Column
    private String urlImangen;

    public Categoria(String titulo, String descripcion, String urlImangen) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImangen = urlImangen;
    }

}
