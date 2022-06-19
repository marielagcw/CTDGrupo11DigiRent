package com.grupo11.demo.model.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.grupo11.demo.model.Producto;
import com.grupo11.demo.model.Usuario;

import java.time.LocalDate;
import java.time.LocalTime;

public class ReservaDTO {
    private Integer id_reserva;
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime horaInicio;
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    private Producto productos;
    private Usuario usuarios;

    public ReservaDTO() {
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
