package com.grupo11.demo.repository;

import com.grupo11.demo.model.Politica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPoliticaRepository extends JpaRepository<Politica,Integer> {
}
