package com.grupo11.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

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
    @JoinColumn(name = "productos_id_producto", referencedColumnName = "id_producto", nullable = false)
    private Producto productos;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "usuarios_id_usuarios", referencedColumnName = "id_usuarios", nullable = false)
    private Usuario usuarios;

    public Reserva() {
    }

    public Reserva(Integer id_reserva, LocalTime horaInicio, LocalDate fechaInicial, LocalDate fechaFinal, Producto productos, Usuario usuarios) {
        this.id_reserva = id_reserva;
        this.horaInicio = horaInicio;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.productos = productos;
        this.usuarios = usuarios;
    }

    public Integer getId_reserva() {
        return id_reserva;
    }

    public void setId_reserva(Integer id_reserva) {
        this.id_reserva = id_reserva;
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

    public Usuario getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Usuario usuarios) {
        this.usuarios = usuarios;
    }
}
