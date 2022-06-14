package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.ProductoDTO;

import java.util.List;
import java.util.Set;

public interface IProductoSevice<T> {

    Set<ProductoDTO> listarTodas();

    ProductoDTO agregar(ProductoDTO productoDTO);

    ProductoDTO buscarPorId(Integer id);

    ProductoDTO actualizar(ProductoDTO productoDTO);

    void eliminar(Integer id);

}
