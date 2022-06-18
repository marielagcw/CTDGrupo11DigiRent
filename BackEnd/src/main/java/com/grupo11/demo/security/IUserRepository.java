package com.grupo11.demo.security;

import com.grupo11.demo.security.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<Usuario, Integer> {

    // Creamos una query para buscar al usuario por email que es su username
    @Query("from Usuario u where u.email =:email")
    Optional<Usuario> findByUsername(@Param("email") String email);

}
