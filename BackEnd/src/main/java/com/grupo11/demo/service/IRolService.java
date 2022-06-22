package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.RolDTO;

import java.util.Set;

public interface IRolService {

    Set<RolDTO> listarTodas();

    RolDTO agregar(RolDTO rolDTO);

    RolDTO buscarPorId(Integer id);

    RolDTO actualizar(RolDTO rolDTO);

    void eliminar(Integer id);
}
