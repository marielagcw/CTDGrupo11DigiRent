package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CiudadDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICiudadService {

    List<CiudadDTO> listarTodo(Pageable pageable);

    CiudadDTO agregar(CiudadDTO ciudadDTO);

    CiudadDTO buscarPorId(Integer id);

    CiudadDTO actualizar(CiudadDTO ciudadDTO);

    void eliminar(Integer id);

}
