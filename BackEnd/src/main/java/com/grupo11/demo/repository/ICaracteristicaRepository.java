package com.grupo11.demo.repository;

import com.grupo11.demo.model.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICaracteristicaRepository  extends JpaRepository<Caracteristica, Integer> {
}
