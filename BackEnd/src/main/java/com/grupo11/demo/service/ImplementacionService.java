package com.grupo11.demo.service;

import java.util.List;

public interface ImplementacionService <T>{
    public T agregar(T t);
    public List<T> listarTodas();

    //opcionales
    public T editar(Integer id);
    public void eliminar(Integer id);


}
