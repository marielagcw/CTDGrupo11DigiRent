package com.grupo11.demo.repository;

import com.grupo11.demo.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImagenRepository  extends JpaRepository<Imagen, Integer> {

}
