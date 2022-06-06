package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CiudadDTO;

import java.util.List;

public interface ICiudadService {

    CiudadDTO agregar(CiudadDTO ciudadDTO);

    List<CiudadDTO> listarTodas();

    CiudadDTO buscarPorId(Integer id);

    CiudadDTO editar(CiudadDTO ciudadDTO);

    void eliminar(Integer id);

}
