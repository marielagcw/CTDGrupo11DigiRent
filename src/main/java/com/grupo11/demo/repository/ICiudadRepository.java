package com.grupo11.demo.repository;

import com.grupo11.demo.model.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICiudadRepository  extends JpaRepository<Ciudad, Integer> {
}
