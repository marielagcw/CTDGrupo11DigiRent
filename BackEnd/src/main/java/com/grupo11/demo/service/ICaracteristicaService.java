package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CaracteristicaDTO;

import java.util.List;
import java.util.Set;

public interface ICaracteristicaService {

    Set<CaracteristicaDTO> listarTodas();

    void agregar(CaracteristicaDTO caracteristicaDTO);

    CaracteristicaDTO buscarPorId(Integer id);

    CaracteristicaDTO actualizar(CaracteristicaDTO caracteristicaDTO);

    void eliminar(Integer id);

}
