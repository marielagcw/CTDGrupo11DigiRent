package com.grupo11.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "caracterisicas")
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_caracterisica;
    @Column(name = "aire_acondiconado")
    private Boolean aireAcondicionado;
    @Column(name = "piscina")
    private Boolean piscina;
    @Column(name = "gimnasio")
    private Boolean gimnasio;
    @Column(name = "mascotas")
    private Boolean mascotas;
    @Column(name = "wifi")
    private Boolean wifi;
    @Column(name = "television")
    private Boolean television;
    @Column(name = "estacinamiento")
    private Boolean estacionamiento;
    @Column(name = "desayuno")
    private Boolean desayuno;
    @Column(name = "lavanderia")
    private Boolean lavanderia;
}
