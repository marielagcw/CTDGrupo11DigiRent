package com.grupo11.demo.repository;

import com.grupo11.demo.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoRepository  extends JpaRepository<Producto, Integer> {
}
