package com.grupo11.demo.model.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
@Getter
@NoArgsConstructor
public class CaracteristicaDTO {
    private Integer id_caracterisica;
    private Boolean aireAcondicionado;
    private Boolean piscina;
    private Boolean gimnasio;
    private Boolean mascotas;
    private Boolean wifi;
    private Boolean television;
    private Boolean estacionamiento;
    private Boolean desayuno;
    private Boolean lavanderia;

    public void setAireAcondicionado(Boolean aireAcondicionado) {
        this.aireAcondicionado = aireAcondicionado;
    }

    public void setPiscina(Boolean piscina) {
        this.piscina = piscina;
    }

    public void setGimnasio(Boolean gimnasio) {
        this.gimnasio = gimnasio;
    }

    public void setMascotas(Boolean mascotas) {
        this.mascotas = mascotas;
    }

    public void setWifi(Boolean wifi) {
        this.wifi = wifi;
    }

    public void setTelevision(Boolean television) {
        this.television = television;
    }

    public void setEstacionamiento(Boolean estacionamiento) {
        this.estacionamiento = estacionamiento;
    }

    public void setDesayuno(Boolean desayuno) {
        this.desayuno = desayuno;
    }

    public void setLavanderia(Boolean lavanderia) {
        this.lavanderia = lavanderia;
    }
}
