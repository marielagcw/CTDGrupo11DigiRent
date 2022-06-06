package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CaracteristicaDTO;
import com.grupo11.demo.model.dtos.PoliticaDTO;
import com.grupo11.demo.model.dtos.ProductoDTO;

import java.util.List;

public interface IPoliticaService {

    PoliticaDTO agregar(PoliticaDTO politicaDTO);

    List<PoliticaDTO> listarTodas();

    PoliticaDTO buscarPorId(Integer id);

    PoliticaDTO editar(PoliticaDTO politicaDTO);

    void eliminar(Integer id);

}
