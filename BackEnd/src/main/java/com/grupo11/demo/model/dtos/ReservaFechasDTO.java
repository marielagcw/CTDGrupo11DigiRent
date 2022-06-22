package com.grupo11.demo.model.dtos;

import java.time.LocalDate;

public class ReservaFechasDTO {
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;

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
}
