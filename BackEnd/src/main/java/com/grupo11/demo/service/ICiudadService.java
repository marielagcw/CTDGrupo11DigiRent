package com.grupo11.demo.service;

import com.grupo11.demo.model.Ciudad;
import com.grupo11.demo.model.dtos.CiudadDTO;

import java.util.List;
import java.util.Set;

public interface ICiudadService {

    Set<CiudadDTO> listarTodas();

    CiudadDTO agregar(CiudadDTO ciudadDTO);

    CiudadDTO buscarPorId(Integer id);

    CiudadDTO actualizar(CiudadDTO ciudadDTO);

    void eliminar(Integer id);

}
