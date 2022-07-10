package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CaracteristicaDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICaracteristicaService {

    List<CaracteristicaDTO> listarTodo(Pageable pageable);

    CaracteristicaDTO agregar(CaracteristicaDTO caracteristicaDTO);

    CaracteristicaDTO buscarPorId(Integer id);

    CaracteristicaDTO actualizar(CaracteristicaDTO caracteristicaDTO);

    void eliminar(Integer id);

}
