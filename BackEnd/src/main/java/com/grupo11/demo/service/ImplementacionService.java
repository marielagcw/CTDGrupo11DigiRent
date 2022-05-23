package com.grupo11.demo.service;

import java.util.List;

public interface ImplementacionService<T> {
    T agregar(T t);

    List<T> listarTodas();

    T buscarPorId(Integer id);

    //opcionales
    T editar(T t);

    void eliminar(Integer id);


}
