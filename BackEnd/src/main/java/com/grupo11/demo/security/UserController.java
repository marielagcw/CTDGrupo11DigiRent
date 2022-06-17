package com.grupo11.demo.security;

import com.grupo11.demo.security.Entities.Usuario;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {


    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<?> user() throws Exception {

        UserDetails userDatails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Usuario usuario = new Usuario();
        usuario.setNombre(userDatails.getUsername());

        return ResponseEntity.ok(usuario);
    }
}