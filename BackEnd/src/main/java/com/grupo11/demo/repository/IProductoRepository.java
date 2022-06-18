package com.grupo11.demo.repository;

import com.grupo11.demo.model.Producto;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductoRepository  extends JpaRepository<Producto, Integer> {

    @Query("FROM Producto p WHERE p.ciudades.id_ciudad = :id ")
    List<Producto> findAllByCiudades(Integer id, Pageable pageable);

    @Query("FROM Producto p WHERE p.categorias.id_categoria = :id ")
    List<Producto> findAllByCategorias(Integer id, Pageable pageable);

}
