package com.grupo11.demo.model.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.grupo11.demo.model.Producto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
public class ReservaDTO {
    private Integer id_reserva;
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime horaInicio;
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    private Producto productos;
}
