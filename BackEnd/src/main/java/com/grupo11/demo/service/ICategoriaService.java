package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CategoriaDTO;

import java.util.Set;

public interface ICategoriaService {

    Set<CategoriaDTO> listarTodas();

    CategoriaDTO agregar(CategoriaDTO categoriaDTO);

    CategoriaDTO buscarPorId(Integer id);

    CategoriaDTO actualizar(CategoriaDTO categoriaDTO);

    void eliminar(Integer id);

}
