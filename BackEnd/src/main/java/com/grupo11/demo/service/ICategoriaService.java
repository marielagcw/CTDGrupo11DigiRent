package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.CaracteristicaDTO;

import java.util.List;
import java.util.Set;

public interface ICategoriaService<T> {

    Set<T> listarTodas();

    T agregar(T t);

    T buscarPorId(Integer id);

    T editar(T t);

    void eliminar(Integer id);


}
