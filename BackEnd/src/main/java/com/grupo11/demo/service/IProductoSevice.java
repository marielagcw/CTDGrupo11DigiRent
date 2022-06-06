package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.ProductoDTO;

import java.util.List;

public interface IProductoSevice<T> {

    ProductoDTO agregar(ProductoDTO productoDTO);

    List<ProductoDTO> listarTodas();

    ProductoDTO buscarPorId(Integer id);

    ProductoDTO editar(ProductoDTO productoDTO);

    void eliminar(Integer id);

}
