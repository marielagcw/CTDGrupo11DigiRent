package com.grupo11.demo.security;

import com.grupo11.demo.security.Entities.Rol;
import com.grupo11.demo.security.Entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class InitConfig implements ApplicationRunner {

    private final IUserRepository repo;

    public InitConfig(IUserRepository repo) {
        this.repo = repo;
    }

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Usuario usuario = new Usuario();
        usuario.setNombre("username");
        usuario.setPassword(bCryptPasswordEncoder.encode("password"));
        Rol rol = new Rol();
        rol.setNombre("USER");
        rol.setId_rol(1);
        usuario.setRol(rol);
        repo.save(usuario);
    }
}
