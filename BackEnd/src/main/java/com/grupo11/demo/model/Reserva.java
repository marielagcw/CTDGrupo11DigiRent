package com.grupo11.demo.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_reserva")
    private Integer id;
    @Column (name = "hora_inicio")
    private LocalTime horaInicio;
    @Column(name = "fecha_inicial")
    private LocalDate fechaInicial;
    @Column(name = "fecha_final")
    private LocalDate fechaFinal;

    @ManyToOne
    @JoinColumn(name = "productos_id_producto", referencedColumnName = "id_producto")
    private Producto productos;

    //CONSTRUCTORES
    public Reserva() {
    }
    public Reserva(LocalTime horaInicio, LocalDate fechaInicial, LocalDate fechaFinal, Producto productos) {
        this.horaInicio = horaInicio;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.productos = productos;
    }

    // GETTERS Y SETTERS

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalTime getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(LocalTime horaInicio) {
        this.horaInicio = horaInicio;
    }

    public LocalDate getFechaInicial() {
        return fechaInicial;
    }

    public void setFechaInicial(LocalDate fechaInicial) {
        this.fechaInicial = fechaInicial;
    }

    public LocalDate getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(LocalDate fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public Producto getProductos() {
        return productos;
    }

    public void setProductos(Producto productos) {
        this.productos = productos;
    }
}
