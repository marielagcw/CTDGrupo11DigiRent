package com.grupo11.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_reserva;

    @Column (name = "hora_inicio")
    private LocalTime horaInicio;

    @Column(name = "fecha_inicial")
    private LocalDate fechaInicial;

    @Column(name = "fecha_final")
    private LocalDate fechaFinal;

    @ManyToOne
    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto",  nullable = false)
    private Producto productos;

    public Reserva(Integer id_reserva, LocalTime horaInicio, LocalDate fechaInicial, LocalDate fechaFinal, Producto productos) {
        this.id_reserva = id_reserva;
        this.horaInicio = horaInicio;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.productos = productos;
    }
}
