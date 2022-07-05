package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.ReservaDTO;
import org.springframework.data.domain.Pageable;

import java.util.Set;

public interface IReservaService<T> {

    Set<ReservaDTO> listarTodo(Pageable pageable);

    ReservaDTO agregar(ReservaDTO reservaDTO);

    ReservaDTO buscarPorId(Integer id);

    ReservaDTO actualizar(ReservaDTO reservaDTO);

    void eliminar(Integer id);

}
