package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.PoliticaDTO;

import java.util.Set;

public interface IPoliticaService {

    Set<PoliticaDTO> listarTodas();

    PoliticaDTO agregar(PoliticaDTO politicaDTO);

    PoliticaDTO buscarPorId(Integer id);

    PoliticaDTO actualizar(PoliticaDTO politicaDTO);

    void eliminar(Integer id);

}
