package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CaracteristicaDTO;

import java.util.List;

public interface ICaracteristicaService {
    CaracteristicaDTO agregar(CaracteristicaDTO caracteristicaDTO);

    List<CaracteristicaDTO> listarTodas();

    CaracteristicaDTO buscarPorId(Integer id);

    CaracteristicaDTO editar(CaracteristicaDTO caracteristicaDTO);

    void eliminar(Integer id);

}
