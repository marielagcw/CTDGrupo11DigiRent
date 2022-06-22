package com.grupo11.demo.repository;

import com.grupo11.demo.model.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseStatus;

@Repository
public interface IRolRepository extends JpaRepository<Rol, Integer> {
}
