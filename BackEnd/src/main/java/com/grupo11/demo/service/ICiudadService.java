package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CiudadDTO;

import java.util.Set;

public interface ICiudadService {

    Set<CiudadDTO> listarTodo();

    CiudadDTO agregar(CiudadDTO ciudadDTO);

    CiudadDTO buscarPorId(Integer id);

    CiudadDTO actualizar(CiudadDTO ciudadDTO);

    void eliminar(Integer id);

}
