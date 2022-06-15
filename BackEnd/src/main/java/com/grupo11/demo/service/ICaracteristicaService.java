package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CaracteristicaDTO;

import java.util.Set;

public interface ICaracteristicaService {

    Set<CaracteristicaDTO> listarTodas();

    CaracteristicaDTO agregar(CaracteristicaDTO caracteristicaDTO);

    CaracteristicaDTO buscarPorId(Integer id);

    CaracteristicaDTO actualizar(CaracteristicaDTO caracteristicaDTO);

    void eliminar(Integer id);

}
