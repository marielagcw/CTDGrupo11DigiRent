package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.ReservaDTO;

import java.util.Set;

public interface IReservaService<T> {

    Set<ReservaDTO> listarTodas();

    ReservaDTO agregar(ReservaDTO reservaDTO);

    ReservaDTO buscarPorId(Integer id);

    ReservaDTO actualizar(ReservaDTO reservaDTO);

    void eliminar(Integer id);

}
