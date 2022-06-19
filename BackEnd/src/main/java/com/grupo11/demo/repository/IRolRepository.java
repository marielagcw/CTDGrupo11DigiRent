package com.grupo11.demo.repository;

import com.grupo11.demo.model.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRolRepository extends JpaRepository<Rol, Integer> {
}
