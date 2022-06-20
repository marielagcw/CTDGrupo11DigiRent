package com.grupo11.demo.repository;

import com.grupo11.demo.model.Producto;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface IProductoRepository  extends JpaRepository<Producto, Integer> {

    @Query("FROM Producto p WHERE p.ciudad.id = :id ")
    List<Producto> findAllByCiudad(Integer id, Pageable pageable);

    @Query("FROM Producto p WHERE p.categoria.id = :id ")
    List<Producto> findAllByCategoria(Integer id, Pageable pageable);

}
