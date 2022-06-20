package com.grupo11.demo.repository;

import com.grupo11.demo.model.Reserva;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IReservaRepository  extends JpaRepository<Reserva, Integer> {
    @Query("FROM Reserva r WHERE r.producto.id = :id ")
    List<Reserva> findAllByProducto(Integer id, Pageable pageable);

}
