package com.grupo11.demo.security;

import com.grupo11.demo.security.Entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<Usuario, Long> {

    // New Special Query
    @Query("from Usuario u where u.email =:email")
    Optional<Usuario> getUserByEmail(@Param("email") String email);

}
