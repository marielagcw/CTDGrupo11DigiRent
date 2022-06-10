package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CaracteristicaDTO;
import com.grupo11.demo.model.dtos.PoliticaDTO;
import com.grupo11.demo.model.dtos.ProductoDTO;

import java.util.List;
import java.util.Set;

public interface IPoliticaService {

    Set<PoliticaDTO> listarTodas();

    void agregar(PoliticaDTO politicaDTO);

    PoliticaDTO buscarPorId(Integer id);

    PoliticaDTO actualizar(PoliticaDTO politicaDTO);

    void eliminar(Integer id);

}
