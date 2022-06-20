package com.grupo11.demo.model.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.grupo11.demo.model.Producto;

import java.time.LocalDate;
import java.time.LocalTime;

public class ReservaDTO {
    private Integer id;
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime horaInicio;
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    private Producto producto;

    public ReservaDTO() {
    }

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

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

