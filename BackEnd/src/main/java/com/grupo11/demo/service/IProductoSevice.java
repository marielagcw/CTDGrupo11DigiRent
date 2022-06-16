package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.ProductoDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductoSevice<T> {

    List<ProductoDTO> listarTodas(Pageable pageable);

    ProductoDTO agregar(ProductoDTO productoDTO);

    ProductoDTO buscarPorId(Integer id);

    ProductoDTO actualizar(ProductoDTO productoDTO);

    void eliminar(Integer id);

    List<ProductoDTO> buscarProductosPorCiudad(Integer id, Pageable pageable);

    List<ProductoDTO> buscarProductosPorCategoria(Integer id, Pageable pageable);
}
