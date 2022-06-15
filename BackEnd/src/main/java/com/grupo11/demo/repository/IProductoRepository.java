package com.grupo11.demo.repository;

import com.grupo11.demo.model.Producto;
import com.grupo11.demo.model.dtos.ProductoDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface IProductoRepository  extends JpaRepository<Producto, Integer> {
    @Query
    Set<ProductoDTO> findByCiudades(Integer id);

//    @Query
//    Set<ProductoDTO> findByCategoriasId_categoria(Integer id);

}
