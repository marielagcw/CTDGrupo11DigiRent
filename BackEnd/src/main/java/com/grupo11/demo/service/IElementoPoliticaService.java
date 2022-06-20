package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.ElementoPoliticaDTO;

import java.util.Set;

public interface IElementoPoliticaService {

    Set<ElementoPoliticaDTO> listarTodo();

    ElementoPoliticaDTO agregar(ElementoPoliticaDTO elementoPoliticaDTO);

    ElementoPoliticaDTO buscarPorId(Integer id);

    ElementoPoliticaDTO actualizar(ElementoPoliticaDTO elementoPoliticaDTO);

    void eliminar(Integer id);

}
