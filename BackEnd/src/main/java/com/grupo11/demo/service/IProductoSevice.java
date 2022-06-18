package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.ProductoDTO;
import org.springframework.data.domain.Pageable;

import java.util.Set;

public interface IProductoSevice<T> {

    Set<ProductoDTO> listarTodas(Pageable pageable);

    ProductoDTO agregar(ProductoDTO productoDTO);

    ProductoDTO buscarPorId(Integer id);

    ProductoDTO actualizar(ProductoDTO productoDTO);

    void eliminar(Integer id);

    Set<ProductoDTO> buscarProductosPorCiudad(Integer id, Pageable pageable);

    Set<ProductoDTO> buscarProductosPorCategoria(Integer id, Pageable pageable);
}
