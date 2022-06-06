package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.TipoDePoliticas;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Set;

@Getter
@NoArgsConstructor
public class PoliticaDTO {

    private Integer id_politica;
    private String titulo;
    private String descripcion;
    private Set<TipoDePoliticas> tipoDePoliticas;

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setTipoDePoliticas(Set<TipoDePoliticas> tipoDePoliticas) {
        this.tipoDePoliticas = tipoDePoliticas;
    }
}
