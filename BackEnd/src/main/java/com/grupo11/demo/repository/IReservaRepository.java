package com.grupo11.demo.repository;

import com.grupo11.demo.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IReservaRepository  extends JpaRepository<Reserva, Integer> {
}
